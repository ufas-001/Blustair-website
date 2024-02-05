import React from "react"



const Banner = () => {

    return (
        <div className="relative h-[500px]">
            <div className="about-us-banner w-full h-full"></div>
            <div className="absolute bottom-0 mb-[45px]">
                <div className=" flex flex-col md:gap-y-4 mx-auto md:mx-0 w-[90%] md:pl-[60px] md:w-[70%] text-white leading-[60px]">
                    <p className="text-[14px] md:text-base">About us</p>
                    <h4 className="text-3xl md:text-[35px] lg:text-[45px] md:leading-[50px] font-[600]">
                        We accelerate sustainable and inclusive growth
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Banner