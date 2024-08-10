import Flickity from 'react-flickity-component';
import { Link } from '@inertiajs/react'
export default function AnimeBrowse({browseAnimes}){
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

            <div className="font-semibold text-[22px] text-black mb-5 mt-5">Browse</div>
            <Flickity className="gap-[30px]" options={flickityOptions}>
                
                {browseAnimes.map(browseAnime=> (
                    <div key={browseAnime.mal_id} className="absolute group overflow-hidden mr-[30px] ">
                        <img src={browseAnime['images']['webp']['large_image_url']}
                            className="object-cover rounded-[30px] h-[340px] w-[250px]" alt=""/>

                            <div className="rating absolute top-0 left-0">
                                <div className="p-[30px] flex items-center gap-1">
                                    <img src="/icons/ic_star.svg" alt=""/>
                                    <span className="text-sm font-medium text-white mt-1">{browseAnime['score']}</span>
                                </div>
                            </div>

                        <div
                            className="absolute bottom-0   left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                            <div className="px-7 pb-7">
                                <div className="font-medium text-xl text-white">{browseAnime['titles'][0]['title']}</div>
                                <p className="mb-0 text-gray-300 text-base mt-[10px]"></p>
                            </div>
                        </div>
                        <div className="absolute top-1/2  left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                            -translate-x-1/2 z-20 transition ease-in-out duration-500">
                            <img src="/icons/ic_play.svg" className="" width="50" alt=""/>
                        </div>
                        <Link href={route('user.dashboard.anime.detail.browse', browseAnime['mal_id'])}  className="inset-0 absolute z-50"></Link>
                    </div>
                ))}
                
                
                
            </Flickity>
</div>
    )
}