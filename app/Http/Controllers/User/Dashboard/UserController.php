<?php

namespace App\Http\Controllers\User\Dashboard;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Interfaces\ApiRepositoryInterface;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;



class UserController extends Controller
{   
    protected ApiRepositoryInterface $apiRepositoryInteraface;
    
    public function __construct(ApiRepositoryInterface $apiRepositoryInteraface)
    {
        $this->apiRepositoryInteraface = $apiRepositoryInteraface;
    }

    public function index(){
        $urlFeaturedAnimes = "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=5";
        $urlBrowseAnimest = "https://api.jikan.moe/v4/seasons/now?limit=10";
        $featuredAnimes = $this->apiRepositoryInteraface->getFeaturedAnimes($urlFeaturedAnimes);
        $browseAnimes = $this->apiRepositoryInteraface->getBrowsedAnimes($urlBrowseAnimest);
        return Inertia::render('User/Dashboard/Index',[
                "featuredAnimes"=>$featuredAnimes['data'],
                "browseAnimes"=>$browseAnimes['data']
        ]);
        

        
    }
}
