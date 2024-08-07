<?php

namespace App\Services;

use App\Interfaces\ApiRepositoryInterface;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class ApiService implements ApiRepositoryInterface
{
    private Client $client;
    protected $methods =[
        "GET"=>"GET"
    ];

    public function getMethods(){
        return $this->methods['GET'];
    }

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function getFeaturedAnimes(string $url)
    {
        $response = $this->client->request($this->getMethods(),$url);
        $data = json_decode($response->getBody()->getContents(),true);
        return $data;
    }

    public function getBrowsedAnimes(string $url)
    {
        $response = $this->client->request($this->getMethods(),$url);
        $data = json_decode($response->getBody()->getContents(),true);
        return $data;
    }

    public function getAnimeById(int $id)
    {
        // 
    }
}
