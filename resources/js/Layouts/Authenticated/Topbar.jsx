import { useState,useRef } from "react"

export default function Topbar(){

    const [dropdownOpen,setdropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const trigger = ()  => {
        if(dropdownOpen){
            dropdownTarget.current.classList.remove('hidden')
        }else {
            dropdownTarget.current.classList.add('hidden')
        }
        setdropdownOpen(!dropdownOpen);

    }

    return(
        <>
            <div className="flex justify-between items-center cursor-pointer">
                    <input  type="text" className="top-search rounded-3xl " placeholder="Search movie, cast, genre"
                        />
                    <div className="flex items-center gap-4">
                        <span className="text-black text-sm font-medium">Welcome, Wibu!</span>
                        
                        <div className="collapsible-dropdown flex flex-col gap-2 relative">
                            <div
                                className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button" onClick={trigger} 
                                >
                                <img src="/images/wibu.jpeg" className="rounded-full object-cover w-full" alt="" />
                            </div>

                            <div className="bg-white rounded-2xl ms-auto text-black font-medium flex  flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden  overflow-hidden"
                                ref={dropdownTarget}>

                                <a href="#!" className="transition-all hover:bg-tael p-4 ">Dashboard</a>
                                <a href="#!" className="transition-all hover:bg-tael p-4 ">Settings</a>
                                <a href="#!" className="transition-all hover:bg-tael p-4">Sign Out</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </>
    )
}