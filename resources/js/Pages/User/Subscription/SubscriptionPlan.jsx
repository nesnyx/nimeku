import Authenticated from "@/Layouts/Authenticated/Authenticated"
import SubscriptionCard from "@/Components/SubscriptionCard"
import { Head,router } from '@inertiajs/react'


export default function Subscription({auth, plans}){
    const selectSubscription = (subscriptionPlan)=>{
        router.post(route('user.dashboard.subscriptionPlan.subscribe',subscriptionPlan))
    }


    return(
        <>
        <Head title="Subscription" />
        <Authenticated auth={auth}>
        
        <div className="ml-[100px] px-[50px]">
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Who one want!
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Utilize your funds for this platform and watch anime to be weebo!
                </p>
                <p></p>

               
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    {plans.map((plan) => (
                        <SubscriptionCard
                            name={plan.name}
                            price={plan.price}
                            durationInMonth={plan.active_period_in_months}
                            features={JSON.parse(plan.features)}
                            isPremium={plan.name === "Premium"}
                            key={plan.id}
                            onSelectSubscription={
                                ()=> selectSubscription(plan.id)
                            }
                        />
                    ))}

                    
                </div>
                
            </div>
        </div>
        
    
        </Authenticated>
        </>
    )
}