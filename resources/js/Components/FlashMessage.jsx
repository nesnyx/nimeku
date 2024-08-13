export default function FlashMessage({className, message = ''}){
    return (
        <>
            <div className={`flex bg-nature rounded p-4 text-white mb-4 text-sm text-green-700 mt-4 ${className}`}>
                {message}
            </div>
        </>
    )

}