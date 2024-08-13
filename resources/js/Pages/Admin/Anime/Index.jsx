import Button from "@/Components/Button"
import FlashMessage from "@/Components/FlashMessage"
import Authenticated from "@/Layouts/Authenticated/Authenticated"
import { Link,Head, useForm } from "@inertiajs/react"


export default function Index({auth , flash_message, animes}){
    
    const {delete : destroy ,put} = useForm()

    return(
        
        <>
        <Head title="Admin"/>
            <Authenticated auth={auth}>
                <Link href={route('admin.dashboard.anime.create')}>
                    <Button onClick={()=> setOpenModal(true)}
                    type={"button"}
                    className="mb-8">
                        Add New Anime
                    </Button>
                </Link>
                {flash_message?.message && <FlashMessage message={flash_message.message}/> }
                
                <table className="table-fixed w-full text-center mt-5">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {animes.map((anime) => (
                            <tr key={anime.id}>
                                    <td>
                                        <img src={`/storage/${anime.thumbnail}`} className="w-32 rounded-md" alt="" />
                                    </td>
                                    <td>
                                        {anime.name}
                                    </td>
                                    <td>
                                        {anime.category}
                                    </td>
                                    <td>
                                        {anime.rating.toFixed(1)}
                                    </td>
                                    <td>
                                        <Link href={route('admin.dashboard.anime.edit',anime.id)}>
                                            <Button type={"button"}>
                                            Edit
                                            </Button>
                                        </Link>
                                    </td>
                                    <td>
                                        <div onClick={()=>{
                                            anime.deleted_at ? put(route('admin.dashboard.anime.restore',anime.id)) : 
                                            destroy(route('admin.dashboard.anime.destroy',anime.id))
                                        }}>
                                            <Button type={"button"}>
                                                {anime.deleted_at ? "Restore" : "Delete"}
                                            </Button>
                                        </div>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Authenticated>
        </>
    )
}