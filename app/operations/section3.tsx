import React from "react"


const Section3 = () => {

    return (
        <div className="bg-gray-200 py-8 md:py-16 mt-16">
            <div className="w-[90%] mx-auto flex flex-col gap-y-6 md:gap-y-8 tracking-[1.2px]">
                <h4 className="font-[600] text-base text-center">FEATURED VIDEO</h4>
                <div className="flex flex-col gap-y-3 md:flex-row justify-between">
                    <div className="w-full md:w-1/2 flex flex-col gap-y-4"> 
                        <h1 className="text-[30px] md:text-[40px] font-[600] leading-[40px] md:leading-[50px]">For Operations, the time is now</h1>
                        <p className="text-[17px] leading-[30px]">Learn more about our adaptive, evolving approach that sits at the intersection of strategy, technology, and operational capabilities.</p>
                    </div>
                    <div className="w-full md:w-[45%] section2c-cs-img h-[300px]">
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Section3 