import Authenticated from '@/Layouts/Authenticated/Authenticated'
import { Head, Link } from '@inertiajs/react'
import { useState,useEffect } from 'react'
import AnimeCard from '@/Components/AnimeCard';
import AnimeBrowse from '@/Components/AnimeBrowse';

export default function Dashboard(){
    

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
                {/*FeatureCard  */}
                <AnimeCard
                anime={anime}
                
                
                />

                {/* BrowseCard */}
                <AnimeBrowse
                browse={browse}
                
                />
        </Authenticated>
        </>
    )
}