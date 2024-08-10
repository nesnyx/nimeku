<?php

namespace App\Interfaces;

use App\Models\SubscriptionPlan;
use Illuminate\Http\Client\Request;

interface SubscriptionPlanRepositoryInterace
{
    public function index();
    public function userSubscribe(array $data);
}
