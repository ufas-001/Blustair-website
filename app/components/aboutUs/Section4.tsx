import React from "react"


const Section4 = () => {

    return (
        <div className="flex flex-col md:flex-row items-center bg-gray-200">
            <div className="about-us-sec4-img h-[450px] md:h-[650px] w-full md:w-[50%]"></div>
            <div className="w-full md:w-[50%] pt-8 md:pt-0">
                <div className="w-[90%] md:w-[75%] mx-auto flex flex-col gap-y-4 md:gap-y-6">
                    <h4 className="text-4xl lg:text-[55px] font-[600]">How we work</h4>
                    <p className="text-base md:text-lg leading-[30px]">
                        From the C-suite to the front line, we partner with clients to help them innovate more sustainably, achieve lasting gains in performance, and build workforces that will thrive for this generation and the next.
                    </p>
                </div>
            </div>    
        </div>
    )
}

export default Section4