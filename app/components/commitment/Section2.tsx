import React from "react"

const Section2 = () => {
    return (
        <div className="mt-24">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col gap-y-3 items-center pr-5 py-8 md:py-16">
                    <h4 className="text-[70px] text-blue-600 font-[600]">140+</h4>
                    <p className="text-[27px] text-center">citizenships</p>
                    <p className="text-[17px] text-center">speaking more than 135 languages with offices in 65+ countries</p>
                </div>
                <div className="flex flex-col items-center gap-y-3 py-8 px-5 md:py-16 border-y-[1px] md:border-y-0 md:border-x-[1px] border-black">
                    <h4 className="text-[70px] text-blue-600 font-[600]">$20M</h4>
                    <p className="text-[27px] text-center">invested</p>
                    <p className="text-[17px] text-center">speaking more than 135 languages with offices in 65+ countries</p>
                </div>
                <div className="flex flex-col items-center gap-y-3 py-8 md:py-16 pl-5">
                    <h4 className="text-[70px] text-blue-600 font-[600]">100%</h4>
                    <p className="text-[27px] text-center">score</p>
                    <p className="text-[17px] text-center">for LGBTQ equality in the Human Rights Campaign Foundation&lsquo;s Corporate Equality Index, every year since 2006</p>
                </div>
            </div>

        </div>
    )
}


export default Section2