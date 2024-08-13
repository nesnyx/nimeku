<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Anime\StoreRequest;
use App\Http\Requests\Admin\Anime\UpdateRequest;
use App\Interfaces\AdminRepositoryInterface;
use App\Models\Anime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use League\CommonMark\Normalizer\SlugNormalizer;
use Illuminate\Support\Str;

class AnimeController extends Controller
{
    protected AdminRepositoryInterface $adminRepositoryInterface;

    public function __construct(AdminRepositoryInterface $adminRepositoryInterface)
    {
        $this->adminRepositoryInterface = $adminRepositoryInterface;
    }
    public function index()
    {
        return $this->adminRepositoryInterface->index();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return $this->adminRepositoryInterface->create();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $data["thumbnail"] = Storage::disk("public")->put('animes', $request->file('thumbnail'));
        $data["slug"] = Str::slug($data['name']);
        return $this->adminRepositoryInterface->store($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Anime $anime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Anime $anime)
    {
       return $this->adminRepositoryInterface->edit($anime);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Anime $anime)
    {
        $data = $request->validated();
        if($request->file('thumbnail')){
            $data['thumbnail'] = Storage::disk('public')->put('animes', $request->file('thumbnail'));
            Storage::disk('public')->delete($anime->thumbnail);
        } else {
            $data['thumbnail'] = $anime->thumbnail;
        }
        return $this->adminRepositoryInterface->update($data, $anime);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Anime $anime)
    {
        return $this->adminRepositoryInterface->destroy($anime);
    }

    public function restore($anime){
        return $this->adminRepositoryInterface->restore($anime);
    }
}
