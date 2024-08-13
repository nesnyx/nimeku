<?php

namespace App\Services;

use App\Interfaces\AdminRepositoryInterface;
use App\Models\Anime;
use Inertia\Inertia;

class AdminService implements AdminRepositoryInterface
{
    public function index()
    {
        $animes = Anime::all();
        return Inertia::render("Admin/Anime/Index",
    [
        'animes'=>$animes
    ]);
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

    public function edit(Anime $anime){
        return Inertia::render("Admin/Anime/Edit",[
            'anime' => $anime
        ]);
    }

    public function update(array $data, Anime $anime)
    {
        $anime->update($data);
        return redirect()->route('admin.dashboard.anime.index')->with([
            'message'=> 'Anime Updated successfully',
            "type"=>"success"
        ]);
    }
}
