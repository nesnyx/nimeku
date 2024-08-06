<?php

namespace Database\Seeders;

use App\Models\Anime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnimeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $animes = [
            [
                'name'=>'Fairy Tail',
                'slug'=>"fairy-tail",
                'category'=>"Adventure",
                "video_url"=>"https://www.youtube.com/watch?v=fxcHqGvisG8",
                'thumbnail'=>"https://cdn.myanimelist.net/images/anime/9/58513l.webp",
                'rating'=>9.0,
                'is_featured'=>1
            ],
            [
                'name'=>'Hazurewaku no "Joutai Ijou Skill" de Saikyou ni Natta Ore ga Subete wo Juurin suru made',
                'slug'=>"failure-frame",
                'category'=>"Adventure",
                "video_url"=>"https://www.youtube.com/watch?v=ErP5ke8mCCw",
                'thumbnail'=>"https://cdn.myanimelist.net/images/anime/1914/143630l.webp",
                'rating'=>9.0,
                'is_featured'=>0
            ]
        ];
        Anime::insert($animes);
    }
}
