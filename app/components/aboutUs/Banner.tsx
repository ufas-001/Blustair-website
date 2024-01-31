import React from "react"



const Banner = () => {

    return (
        <div className="relative h-[500px]">
            <div className="about-us-banner w-full h-full"></div>
            <div className="absolute bottom-0 mb-[45px] flex flex-col gap-y-4 left-[10%] w-[60%] text-white leading-[60px]">
                <p className="text-base">About us</p>
                <h4 className="text-[55px] font-[600]">
                    We accelerate sustainable and inclusive growth
                </h4>
            </div>
        </div>
    )
}

export default Banner