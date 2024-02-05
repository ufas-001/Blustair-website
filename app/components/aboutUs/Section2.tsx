import React from "react"

const Section2 = () => {

    return (
        <div className="flex flex-col md:flex-row items-center w-full md:w-[95%] md:ml-auto">
            <div className="w-[90%] md:w-[50%]">
                <div className="w-full md:w-[85%] flex flex-col gap-y-4 md:gap-y-6 py-8 md:py-0">
                    <h4 className="text-4xl lg:text-[55px] font-[600]">Who we are</h4>
                    <p className="text-base md:text-lg leading-[30px]">
                        Our firm is designed to operate as one—a single global partnership united by a strong set of values. We are equally committed to both sides of our mission: attracting and developing a talented and diverse group of colleagues and helping our clients create meaningful and lasting change.
                    </p>
                </div>
            </div>
            <div className="about-us-sec2-img h-[450px] md:h-[650px] w-full md:w-[50%]"></div>
        </div>
    )
}

export default Section2