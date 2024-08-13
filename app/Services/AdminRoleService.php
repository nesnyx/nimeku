<?php

namespace App\Services;

use App\Interfaces\AdminRoleRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AdminRoleService implements AdminRoleRepositoryInterface
{
    public function hasRole()
    {
        $user = new User();
        $findUserById = $user->where('id',Auth::id())->first();
        $role = $findUserById->hasRole('admin');
        return $role;

    }
    
}
