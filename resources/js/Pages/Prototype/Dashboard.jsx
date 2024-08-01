import Authenticated from '@/Layouts/Authenticated/Authenticated'
import { Head } from '@inertiajs/react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Flickity from 'react-flickity-component';

export default function Dashboard(){
    const flickityOptions = {
        "cellAlign": "left",
                "contain": true,
                "groupCells": 1,
                "wrapAround": false,
                "pageDots": false,
                "prevNextButtons": false,
                "draggable": ">1"
    }

    const [anime, setAnime] = useState([])
    const [browse, setBrowse] = useState([])

    function getDataFromAPI(apiUrl){
        return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data['data'])
        .catch(error => console.error(error))
    }

    function getJikanApi(apiUrl){
        return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data['data'])
        .catch(error => console.error(error))
    }

    useEffect(()=>{
        async function fetchData(){
            const result = await getJikanApi('https://api.jikan.moe/v4/seasons/now?limit=10')
            setBrowse(result)
        }
        fetchData();
    }, [])


    useEffect(()=>{
        async function fetchData(){
            const result = await getDataFromAPI('https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=5')
            setAnime(result)
        }
        fetchData();

    }, [])

    
    return (
        <>
        <Head
        title='Dashboard'>
            <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
        </Head>
        <Authenticated>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Top Animes</div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>

                            {/* Features */}
                            {anime.map(data => (
                                <div key={data.mal_id} className="absolute overflow-hidden group mr-[30px]">
                                    <img  src={data['images']['webp']['large_image_url']}
                                        className="object-cover rounded-[30px] w-[520px] h-[340px]" alt="" />
                                
                                    <div className="rating absolute top-0 left-0">
                                        <div className="p-[30px] flex items-center gap-1">
                                            <img src="/icons/ic_star.svg" alt=""/>
                                            <span className="text-sm font-medium text-white mt-1">{data['score']}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                        rounded-br-[28px] flex justify-between items-center px-7 h-[130px]">
                                        <div>
                                            <div className="font-medium text-[22px] text-white">{data['titles'][0]['title']}</div>
                                            <p className="mb-0 text-white text-sm font-light">{data['genres'][0]['name']} • {data['genres'][1]['name']}</p>
                                        </div>
                                        <div
                                            className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                                            <img src="/icons/ic_play.svg" width="50" alt=""/>
                                        </div>
                                    </div>
                                    <a href="watching.html" className="inset-0 absolute z-50"></a>
                                </div>
                            ))}
                    </Flickity>
                </div>

                <div>

                    <div className="font-semibold text-[22px] text-black mb-5 mt-5">Browse</div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        
                        {browse.map(data=> (
                            <div key={data.mal_id} className="absolute group overflow-hidden mr-[30px] ">
                                <img src={data['images']['webp']['large_image_url']}
                                    className="object-cover rounded-[30px] h-[340px] w-[250px]" alt=""/>

                                    <div className="rating absolute top-0 left-0">
                                        <div className="p-[30px] flex items-center gap-1">
                                            <img src="/icons/ic_star.svg" alt=""/>
                                            <span className="text-sm font-medium text-white mt-1">{data['score']}</span>
                                        </div>
                                    </div>

                                <div
                                    className="absolute bottom-0   left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                                    <div className="px-7 pb-7">
                                        <div className="font-medium text-xl text-white">{data['titles'][0]['title']}</div>
                                        <p className="mb-0 text-gray-300 text-base mt-[10px]"></p>
                                    </div>
                                </div>
                                <div className="absolute top-1/2  left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                    -translate-x-1/2 z-20 transition ease-in-out duration-500">
                                    <img src="/icons/ic_play.svg" className="" width="50" alt=""/>
                                </div>
                                <a href="watching.html" className="inset-0 absolute z-50"></a>
                            </div>
                        ))}
                        
                        
                        
                    </Flickity>
                </div>
        </Authenticated>
        </>
    )
}