<?php

namespace App\Interfaces;

use App\Models\Anime;

interface AdminRepositoryInterface
{
    public function index();
    public function create();
    public function store(array $data);
    public function edit(Anime $anime);
    public function update(array $data, Anime $anime);
    public function destroy(Anime $anime);
    public function restore($anime);
}
