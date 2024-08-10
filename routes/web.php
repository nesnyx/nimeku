<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\AnimeController;
use App\Http\Controllers\User\Dashboard\UserController;
use App\Http\Controllers\User\SubscriptionPlanController;
use App\Models\SubscriptionPlan;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect("/","/login");


Route::prefix("prototype")->name('prototype.')->group(function (){
    route::get('/login',function(){
        return Inertia::render("Prototype/Login");
    })->name('login');

    route::get('/register',function(){
        // return Inertia::render("Prototype/Register");
        return Inertia::render("Prototype/Register");
    })->name('register');

    

    route::get('/subscription',function(){
        // return Inertia::render("Prototype/Register");
        return Inertia::render("Prototype/Subscription");
    })->name('subscription');

    // route::get('/anime/{id}',function(){
    //     // return Inertia::render("Prototype/Register");
    //     return Inertia::render("Prototype/Anime/AnimeDetail");
    // })->name('anime.detail');
    
});

Route::middleware(['auth','role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function (){
    Route::get('/',[UserController::class,'index'])->middleware(['auth', 'role:user'])->name('index');
    Route::get('/anime/{mal_id}',[AnimeController::class,'showFeatured'])->middleware(['auth', 'role:user'])->name('anime.detail');

    Route::get('/anime/browse/{mal_id}',[AnimeController::class,'showBrowse'])->middleware(['auth', 'role:user'])->name('anime.detail.browse');

    Route::get("subscription-plan", [SubscriptionPlanController::class, "index"])->middleware(['auth', 'role:user'])->name("subscriptionPlan.index");

    Route::post("subscription-plan/{subscriptionPlan}/user-subscribe", [SubscriptionPlanController::class, "userSubscribe"])->middleware(['auth', 'role:user'])->name("subscriptionPlan.subscribe");
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
