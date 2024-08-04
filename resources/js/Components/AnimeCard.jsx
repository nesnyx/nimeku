import Flickity from 'react-flickity-component';
import {  Link } from '@inertiajs/react';

export default function AnimeCard({anime}){
        const flickityOptions = {
            "cellAlign": "left",
                    "contain": true,
                    "groupCells": 1,
                    "wrapAround": false,
                    "pageDots": false,
                    "prevNextButtons": false,
                    "draggable": ">1"
        }
    return(
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
                                    <Link href={route('prototype.anime.detail', data['mal_id'])} className="inset-0 absolute z-50"></Link>
                                </div>
                            ))}
                    </Flickity>
                </div>
    )
}