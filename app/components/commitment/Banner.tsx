import React from "react";


const Banner = () => {

    return (
        <div className="w-full relative h-[500px] tracking-[1.5px]">
            <div className="commit-banner w-full h-full"></div>
            <div className="absolute bottom-0 mb-16 text-white flex items-center w-[100%] flex-col gap-y-2">
                <p className="text-base text-center">Diversity and Inclusion</p>
                <h4 className="text-[55px] font-[600] ">Delivering through diversity</h4>
            </div>
        </div>
    )
}

export default Banner