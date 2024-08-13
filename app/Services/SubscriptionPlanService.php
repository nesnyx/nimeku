<?php

namespace App\Services;


use Illuminate\Http\Request;
use App\Interfaces\SubscriptionPlanRepositoryInterace;
use App\Models\SubscriptionPlan;
use Inertia\Inertia;
use App\Models\UserScription;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Midtrans;

class SubscriptionPlanService implements SubscriptionPlanRepositoryInterace
{

    public function __construct()
    {
      // Set your Merchant Server Key
      \Midtrans\Config::$serverKey = env('MIDTRANS_SERVERKEY');
      // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
      \Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');
      // Set sanitization on (default)
      \Midtrans\Config::$isSanitized = env('MIDTRANS_IS_SANITIZED');
      // Set 3DS transaction for credit card to true
      \Midtrans\Config::$is3ds = env('MIDTRANS_IS_3DS');
    }



    public function index(){
          
          $plan = SubscriptionPlan::all();
          return Inertia::render("User/Subscription/SubscriptionPlan",[
              "plans" => $plan,
              "userSubscription" => null
              
          ]);

    }

    public function userSubscribe(array $data){     
      $createData = UserScription::create($data);

      $params = [
        'transaction_details' => [
          'order_id' => $createData->id.'-'.Str::random(5),
            'gross_amount' => $createData->price,
        ]
        ];
      
      $snapToken = \Midtrans\Snap::getSnapToken($params);

      $createData->update([
        'snap_token'=>$snapToken
      ]);
      return Inertia::render("User/Subscription/SubscriptionPlan",[
        "userSubscription" => $createData,
        
    ]);
    }

    public function midtransCallback(Request $request)
    {
        $notif = new Midtrans\Notification();

        $transaction_status = $notif->transaction_status;
        $fraud = $notif->fraud_status;

        $transaction_id = explode('-', $notif->order_id)[0];
        $userSubscription = UserScription::find($transaction_id);

        if ($transaction_status == 'capture') {
            if ($fraud == 'challenge') {
                // TODO Set payment status in merchant's database to 'challenge'
                $userSubscription->payment_status = 'pending';
            }
            else if ($fraud == 'accept') {
                // TODO Set payment status in merchant's database to 'success'
                $userSubscription->payment_status = 'paid';
                $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subscriptionPlan->active_period_in_months);
            }
        }
        else if ($transaction_status == 'cancel') {
            if ($fraud == 'challenge') {
                // TODO Set payment status in merchant's database to 'failure'
                $userSubscription->payment_status = 'failed';
            }
            else if ($fraud == 'accept') {
                // TODO Set payment status in merchant's database to 'failure'
                $userSubscription->payment_status = 'failed';
            }
        }
        else if ($transaction_status == 'deny') {
            // TODO Set payment status in merchant's database to 'failure'
            $userSubscription->payment_status = 'failed';
        }
        else if ($transaction_status == 'settlement') {
            // TODO set payment status in merchant's database to 'Settlement'
            $userSubscription->payment_status = 'paid';
            $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subscriptionPlan->active_period_in_months);
        }
        else if ($transaction_status == 'pending') {
            // TODO set payment status in merchant's database to 'Pending'
            $userSubscription->payment_status = 'pending';
        }
        else if ($transaction_status == 'expire') {
            // TODO set payment status in merchant's database to 'expire'
            $userSubscription->payment_status = 'failed';
        }

        $userSubscription->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Payment success'
        ]);
    }
}
