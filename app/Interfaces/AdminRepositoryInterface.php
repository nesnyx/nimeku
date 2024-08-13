<?php

namespace App\Interfaces;

interface AdminRepositoryInterface
{
    public function index();
    public function create();
    public function store(array $data);
}
