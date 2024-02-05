import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"



const Section6 = () => {

    return (
        <div className="mt-24 w-[90%] mx-auto flex flex-col gap-y-10">
            <h4 className="text-base text-center font-[600] tracking-[1.5px]">DIVERSITY, EQUITY, AND INCLUSION MATTER</h4>
            <div className="flex ">
                <div className="w-1/2 flex pr-8">
                    <div className="w-1/2 commit-section6 h-[300px] mr-5"></div>
                    <div className="w-1/2 flex flex-col gap-y-7 pl-3">
                        <p className="text-[26px]">McKinsey Black Network</p>
                        <p className="text-[18px] leading-[30px]">McKinsey Black Network, one of our global affinity groups, is part of our commitment to create and maintain an environment where everyone’s background, perspective, and skills are supported.</p>
                        <Link href="/" className="text-base font-[600]">Learn more <ArrowRight size={16} className="text-blue-600 inline"  /> </Link>
                    </div>
                </div>
                <div className="w-1/2 flex pl-8">
                    <div className="w-1/2 commit-section6 h-[300px] mr-5"></div>
                    <div className="w-1/2 flex flex-col gap-y-7 pl-3">
                        <p className="text-[26px]">LGBTQ+ Equality</p>
                        <p className="text-[18px] leading-[30px]">Equal at McKinsey is a vibrant, connected, worldwide network of LGBTQ+ colleagues who are committed to each other’s success.</p>
                        <Link href="/" className="text-base font-[600]">Learn more <ArrowRight size={16} className="text-blue-600 inline"  /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Section6 