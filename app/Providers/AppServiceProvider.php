<?php

namespace App\Providers;

use App\Interfaces\AdminRepositoryInterface;
use App\Interfaces\AdminRoleRepositoryInterface;
use Illuminate\Support\ServiceProvider;
use App\Interfaces\SubscriptionPlanRepositoryInterace;
use App\Services\SubscriptionPlanService;
use App\Interfaces\ApiRepositoryInterface;
use App\Interfaces\DependencyInjectionRepositoryInterface;
use App\Services\AdminRoleService;
use App\Services\AdminService;
use App\Services\ApiService;
use App\Services\DependencyInjectionService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(SubscriptionPlanRepositoryInterace::class,SubscriptionPlanService::class);

        $this->app->bind(ApiRepositoryInterface::class,ApiService::class);
        $this->app->bind(AdminRepositoryInterface::class,AdminService::class);
        $this->app->bind(AdminRoleRepositoryInterface::class,AdminRoleService::class);
        $this->app->bind(DependencyInjectionRepositoryInterface::class, DependencyInjectionService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
