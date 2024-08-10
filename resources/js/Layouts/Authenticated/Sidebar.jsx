import { Link, usePage } from "@inertiajs/react"
import SubscriptionDetail from "./SubscriptionDetail"
import MenuItems from "@/Components/MenuItems"
import { UserMenu, UserLogout } from "./MenuList"


export default function Sidebar( {auth} ){
    const {activePlan} = usePage().props
    return(
        <>
            <aside className="fixed z-50 w-[300px] h-full">

                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <a href="/">
                        <img src="/images/wibu.png" alt="" />
                    </a>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

                        
                        <div>
                            <div className="text-black text-sm mb-4">Menu</div>
                    
                            {UserMenu.map((menu, index)=> (
                                <MenuItems
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={menu.link && route().current(menu.link)}
                                />
                            ))}
                            
                            
                        </div>
                        
                        <div>
                            <div className="text-gray-1 side-link mb-4">Others</div>
                            {UserLogout.map((menu, index)=> (
                                <MenuItems
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={menu.link && route().current(menu.link)}
                                    method={menu.method}
                                />
                            ))}
                           
                            
                           
                        </div>
                    
                        

                
                    {activePlan && 
                        
                        <SubscriptionDetail
                        name={activePlan.name}
                         isPremium={activePlan.name === "Premium"} 
                         remainingActiveDays={activePlan.remainingActiveDays} 
                         activeDays={activePlan.activeDays} />
                    }
                    
                        

                    </div>
                </div>
            </aside>
        </>
    )
}