<?php

namespace App\Services;

use App\Interfaces\AdminRepositoryInterface;
use App\Models\Anime;
use Inertia\Inertia;

class AdminService implements AdminRepositoryInterface
{
    public function index()
    {
        return Inertia::render("Admin/Anime/Index");
    }

    public function create()
    {
        return Inertia::render("Admin/Anime/Create");
    }

    public function store(array $data)
    {
        Anime::create($data);
        return redirect()->route('admin.dashboard.anime.index')->with([
            'message'=> 'Anime inserted successfully',
            "type"=>"success"
        ]);
    }
}
