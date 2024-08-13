<?php

namespace App\Services;

use App\Interfaces\AdminRoleRepositoryInterface;
use App\Interfaces\DependencyInjectionRepositoryInterface;

class DependencyInjectionService implements DependencyInjectionRepositoryInterface
{
    protected AdminRoleRepositoryInterface $adminRoleRepositoryInterface;

    public function __construct(AdminRoleRepositoryInterface $adminRoleRepositoryInterface)
    {
        $this->adminRoleRepositoryInterface = $adminRoleRepositoryInterface;
    }

    public function adminRole() {
        return $this->adminRoleRepositoryInterface->hasRole();
    }
}
