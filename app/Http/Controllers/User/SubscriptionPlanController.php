<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use Inertia\Inertia;
use App\Interfaces\SubscriptionPlanRepositoryInterace;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{

    protected SubscriptionPlanRepositoryInterace $subscriptionPlanRepositoryInterface;

    public function __construct(SubscriptionPlanRepositoryInterace $subscriptionPlanRepositoryInterface)
    {
        $this->subscriptionPlanRepositoryInterface = $subscriptionPlanRepositoryInterface;   
    }


    public function index(){
        return $this->subscriptionPlanRepositoryInterface->index();
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan){
        $data = [
            "user_id"=>Auth::id(),
            "subscription_plan_id" => $subscriptionPlan->id,
            "price"=>$subscriptionPlan->price,
            "expired_date"=> Carbon::now()->addMonth($subscriptionPlan->active_period_in_months),
            'payment_status' => "success",
            "snap_token"=>''
        ];
        return $this->subscriptionPlanRepositoryInterface->userSubscribe($data);
    }
}
