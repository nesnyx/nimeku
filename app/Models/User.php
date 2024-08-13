<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use Spatie\Permission\Traits\HasRoles;


class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getIsActiveAttribute(){
        
        if(!$this->lastActiveUsersSubscription){
            return false;
        }
        $dateNow = Carbon::now();
        $dateExpired = Carbon::create($this->lastActiveUsersSubscription->expired_date);
        // $dateExpired = Carbon::create($this->lastActiveUsersSubscription->expired_date);
        return $dateNow->lessThanOrEqualTo($dateExpired);
    }

    public function lastActiveUsersSubscription(): HasOne {
        return $this->hasOne(UserScription::class)->wherePaymentStatus('success')->latest();
    }



    
}
