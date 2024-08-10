export default function SubscriptionDetail({name,isPremium, remainingActiveDays,activeDays}){

    const remainingDays = activeDays - remainingActiveDays;
    const loadingProgress = ()=>{
        const progress = remainingDays / activeDays
        if (progress < 0.25) {
            return 'w-3/12'
        } else if(progress < 0.5){
            return 'w-6/12'
        } else if (progress < 0.75){
            return 'w-9/12'
        } else {
            return 'w-full'
        }
    }

    return( 
    <>

        {/* Basic */}
        {!isPremium && (
            <div className="mt-auto pr-[30px]">
            <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                    <img src="/images/verify.png" alt="" width={"60px"}/>
                    <div className="text-black text-lg font-semibold mb-8 mt-2">
                        {name}
                    </div>
                    <div className="text-black text-sm mb-2">
                       {remainingActiveDays} of {activeDays} hari
                    </div>
                    
                </div>
            </div>
        )}

        {/* premium */} 
        {isPremium && (
            <div className="mt-auto pr-[30px]">
                <div className="p-5 bg-nature rounded-[25px]  mb-4">
                    <img src="/images/verified.png" alt="" width={"60px"}/>
                    <div className="text-white text-lg font-semibold mt-4 mb-8">
                        {name}
                    </div>
                    <div className="text-white text-sm mb-2">
                    {remainingActiveDays} of {activeDays} hari
                    </div>
                    <div className="rounded-full w-full h-[6px] bg-[#333333]">
                        <div className={`rounded-full h-full ${loadingProgress()} bg-vintage`}></div>
                    </div>
                </div>
            </div>
        )}
    </>
    )
    
}