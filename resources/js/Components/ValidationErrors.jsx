import React from "react";

export default function ValidationErrors({errors}){
    return (
        Object.keys(errors).length > 0 && (
            <div className="my-4 px-4 py-2 border-red-600 ">
                <div className="font-medium text-red-600">
                    <div className="mt-3 list-disc list-inside text-sm text-red-600">
                        {Object.key(errors).map(function (key,index){
                            return <li key={index}>{errors[key]}</li>
                        })}
                    </div>
                </div>
            </div>
        )
    )
}