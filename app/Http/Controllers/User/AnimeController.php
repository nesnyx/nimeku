<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\ApiRepositoryInterface;
use Inertia\Inertia;

class AnimeController extends Controller
{
    protected ApiRepositoryInterface $apiRepositoryInteraface;
    protected $urlFeaturedAnimes;
    protected $urlBrowseAnimes;
    protected array $storageData;

    public function __construct(ApiRepositoryInterface $apiRepositoryInteraface)
    {
        $this->apiRepositoryInteraface = $apiRepositoryInteraface;
        $this->urlFeaturedAnimes = "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=5";
        $this->urlBrowseAnimes = "https://api.jikan.moe/v4/seasons/now?limit=10";
        $this->storageData = [];
    }

    public function showFeatured(int $mal_id){
        $featured = $this->apiRepositoryInteraface->getFeaturedAnimes($this->urlFeaturedAnimes);
        $animes = $featured['data'];
        foreach ($animes as $item) {
            $checkId = false;
            if ($item['mal_id'] == $mal_id){
                $checkId = true;
            } else{
                $checkId = false;
            }
            if($checkId){
                $this->storageData['mal_id'] = $mal_id;
                $this->storageData['url'] = $item['trailer']['url'];
            } else {
                $this->storageData['mal_id'] = $mal_id;
                $this->storageData['name'] = $item['titles'][0]['title'];
                $this->storageData['check'] = $checkId;
            }
            
        }
        
        return Inertia::render("User/Animes/AnimeDetail",[
            "data"=>$this->storageData
        ]);
    }

    public function showBrowse(int $mal_id){
        $featured = $this->apiRepositoryInteraface->getFeaturedAnimes($this->urlBrowseAnimes);
        $animes = $featured['data'];
        foreach ($animes as $item) {
            $checkId = false;
            if ($item['mal_id'] == $mal_id){
                $checkId = true;
            } else{
                $checkId = false;
            }
            if($checkId){
                $this->storageData['mal_id'] = $mal_id;
                $this->storageData['url'] = $item['trailer']['url'];
            } else {
                $this->storageData['mal_id'] = $mal_id;
                $this->storageData['name'] = $item['titles'][0]['title'];
                $this->storageData['check'] = $checkId;
            }
            
        }
        
        return Inertia::render("User/Animes/AnimeDetail",[
            "data"=>$this->storageData
        ]);
    }
}
