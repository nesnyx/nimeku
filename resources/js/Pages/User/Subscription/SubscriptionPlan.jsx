import Authenticated from "@/Layouts/Authenticated/Authenticated"
import SubscriptionCard from "@/Components/SubscriptionCard"
import { Head,router } from '@inertiajs/react'


export default function Subscription({auth, plans, env}){
    const selectSubscription = (subscriptionPlan)=>{
        router.post(route('user.dashboard.subscriptionPlan.subscribe',subscriptionPlan),{},{
            only: ['userSubscription'],
            onSuccess: ({props}) => {
                onSnapMidtrans(props.userSubscription)
            }
        }
    )
    }

    const onSnapMidtrans = (userSubscription)=>{
        snap.pay(userSubscription.snap_token, {
            // Optional
            onSuccess: function(result){
              router.visit(route('user.dashboard.index'))
            },
            // Optional
            onPending: function(result){
                console.log({result})
            },
            // Optional
            onError: function(result){
                console.log({result})
            }
        })
    }


    return(
        
        <Authenticated auth={auth}>
        <Head>
            <script 
            src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={env.MIDTRANS_CLIENTKEY}></script>
            <title>
                Subscription Plan
            </title>
        </Head>
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
        
    )
}