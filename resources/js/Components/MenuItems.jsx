import { Link } from "@inertiajs/react"



export default function MenuItems({link, icon, text, isActive,method = 'get'}){
    return (
        <>
            <Link  href={link ? route(link) : null} className={`side-link ${isActive && "active"}`} method={method} as="button">
            {icon}
            {text}                    
                                
            </Link>
        </>
    )
}