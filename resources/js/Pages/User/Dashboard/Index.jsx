import Authenticated from '@/Layouts/Authenticated/Authenticated'
import { Head, Link } from '@inertiajs/react'
import { useState,useEffect } from 'react'
import AnimeCard from '@/Components/AnimeCard';
import AnimeBrowse from '@/Components/AnimeBrowse';



export default function Dashboard({auth,featuredAnimes,browseAnimes}){
    
    return (
        <>
        <Head
        title='Dashboard'>
            <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
        </Head>

        <Authenticated auth={auth}>
                {/*FeatureCard  */}
                <AnimeCard
                featuredAnimes={featuredAnimes}
                
                
                
                />

                {/* BrowseCard */}
                <AnimeBrowse
                browseAnimes={browseAnimes}
                
                />
        </Authenticated>
        </>
    )
}