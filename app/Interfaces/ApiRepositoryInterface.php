<?php

namespace App\Interfaces;

interface ApiRepositoryInterface
{
    public function getFeaturedAnimes(String $url);
    public function getBrowsedAnimes(String $url);
    public function getAnimeById(int $id);

}
