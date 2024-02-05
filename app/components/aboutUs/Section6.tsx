import React from "react"

const Section6 = () => {

    return (
        <div className="flex flex-col md:flex-row items-center md:w-[95%] md:ml-auto">
            <div className="w-full md:w-[50%]">
                <div className="w-[90%] mx-auto md:mx-0 md:w-[85%] flex flex-col gap-y-4 md:gap-y-6 py-8 md:py-0">
                    <h4 className="text-4xl lg:text-[55px] font-[600]">Our commitments</h4>
                    <p className="text-base md:text-lg leading-[30px]">
                        We are dedicated to managing our firm and working with our clients in ways that benefit individuals, communities, and the environments they live in.
                    </p>
                </div>
            </div>
            <div className="about-us-sec6-img h-[450px] md:h-[650px] w-full md:w-[50%]"></div>
        </div>
    )
}

export default Section6