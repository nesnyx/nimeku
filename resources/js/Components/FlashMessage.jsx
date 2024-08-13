export default function FlashMessage({className, message = ''}){
    return (
        <>
            <div className={`flex bg-nature rounded p4 mb-4 text-sm text-green-700 ${className}`}>
                {message}
            </div>
        </>
    )

}