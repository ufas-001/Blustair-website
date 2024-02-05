import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"



const Section8 = () => {

    return (
        <div className="w-[90%] mx-auto py-16 flex flex-col gap-y-10">
            <div  className=" flex flex-col gap-y-5 ">
                <h4 className="text-base font-[600] text-center">FEATURED IMPACT</h4>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                        <div className="about-us-sec8-img h-[350px]"></div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col">
                                <span className="text-[14px]">Impact story</span>
                                <Link href="/" className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-2 hover:text-blue-600">An AI power play: Fueling the next wave of innovation in the energy sector</Link>
                            </div>
                            <p className="text-[18px] font-[50] tracking-[1.5px]"> <em>May 12, 2022</em> - How Vistra Corp. is partnering with McKinsey to improve efficiency and reduce emissions by using AI.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                        <div className="about-us-sec8b-img h-[350px]"></div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col">
                                <span className="text-[14px]">Impact story</span>
                                <Link href="/" className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-2 hover:text-blue-600">An AI power play: Fueling the next wave of innovation in the energy sector</Link>
                            </div>
                            <p className="text-[18px] font-[50] tracking-[1.5px]"> <em>May 12, 2022</em> - How Vistra Corp. is partnering with McKinsey to improve efficiency and reduce emissions by using AI.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link href="/" className="border text-base font-[600] border-blue-600 px-10 text-blue-600 py-3 ">See more case studies <ArrowRight size={20} className="inline text-blue-600" /> </Link>
            </div>
        </div>
    )
}


export default Section8