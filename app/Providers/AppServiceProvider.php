<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\SubscriptionPlanRepositoryInterace;
use App\Services\SubscriptionPlanService;
use App\Interfaces\ApiRepositoryInterface;
use App\Services\ApiService;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(SubscriptionPlanRepositoryInterace::class,SubscriptionPlanService::class);

        $this->app->bind(ApiRepositoryInterface::class,ApiService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
