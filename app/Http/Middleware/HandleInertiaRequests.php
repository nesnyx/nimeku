<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */


    private function activePlan(){
        $activePlan = Auth::user() ? Auth::user()->lastActiveUsersSubscription : null;
        if(!$activePlan){
            return null;
        }

        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->active_period_in_months);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = ceil(Carbon::parse($activePlan->updated_at)->diffInDays(Carbon::now()));
        

        return[
            'name'=>$activePlan->subscriptionPlan->name,
            "remainingActiveDays"=>$remainingActiveDays,
            "activeDays"=>$activeDays
        ];
    }



    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash_message'=> [
                'message' => Session::get('message'),
                'type' => Session::get("type"),
            ],
            'env'=>[
                'MIDTRANS_CLIENTKEY'=>env('MIDTRANS_CLIENTKEY')
            ],
            'activePlan'=>$this->activePlan()
        ];
    }
}
