import Authenticated from "@/Layouts/Authenticated/Authenticated"
import SubscriptionCard from "@/Components/SubscriptionCard"
import { Head } from '@inertiajs/react'
export default function Subscription(){
    return(
        <>
        <Head title="Subscription" />
        <Authenticated>
        
        <div className="ml-[100px] px-[50px]">
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Who one want!
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Utilize your funds for this platform and watch anime to be weebo!
                </p>

               
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <SubscriptionCard
                        name={"Basic"}
                        price={79000}
                        durationInMonth={3}
                        features={[
                            'HD',
                            'HD',
                            'HD',
                        ]}
                    
                    />
                   

                    {/* Premium */}
                    <SubscriptionCard isPremium 
                        name={"Premium"}
                        price={299000}
                        durationInMonth={6}
                        features={[
                            'HD',
                            'HD',
                            'HD',
                        ]}
                    
                    />
                    
                </div>
                
            </div>
        </div>
        
    
        </Authenticated>
        </>
    )
}