import React from "react"


const Banner = () => {
    return (
        <div className="w-full relative h-[500px] tracking-[1.5px]">
            <div className="banner-img w-full h-full"></div>
            <div className="absolute bottom-0 mb-24 flex items-center w-[100%] flex-col gap-y-6">
                <h4 className="text-5xl font-[600] ">Operations</h4>
                <p className="text-2xl">Transforming strategy into lasting success</p>
            </div>
        </div>
    )
}

export default Banner