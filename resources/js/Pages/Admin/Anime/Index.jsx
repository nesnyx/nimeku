import Button from "@/Components/Button"
import FlashMessage from "@/Components/FlashMessage"
import Authenticated from "@/Layouts/Authenticated/Authenticated"
import { Link,Head } from "@inertiajs/react"


export default function Index({auth , flash_message}){
    
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
                
                
            </Authenticated>
        </>
    )
}