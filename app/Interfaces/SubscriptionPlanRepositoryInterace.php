<?php

namespace App\Interfaces;

use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;

interface SubscriptionPlanRepositoryInterace
{
    public function index();
    public function userSubscribe(array $data);
    public function midtransCallback(Request $request);
}
