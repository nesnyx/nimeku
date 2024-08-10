<?php

namespace App\Services;

use App\Http\Middleware\CheckUserSubscription;
use Illuminate\Http\Client\Request;
use App\Interfaces\SubscriptionPlanRepositoryInterace;
use App\Models\SubscriptionPlan;
use Inertia\Inertia;
use App\Models\UserScription;
class SubscriptionPlanService implements SubscriptionPlanRepositoryInterace
{
   public function index(){
        
        $plan = SubscriptionPlan::all();
        return Inertia::render("User/Subscription/SubscriptionPlan",[
            "plans" => $plan,
            
        ]);

   }

   public function userSubscribe(array $data){     
     $createData = UserScription::create($data);
     return redirect()->route('user.dashboard.index');
   }
}
