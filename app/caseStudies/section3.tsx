import React from "react";
import {ChevronRight, ArrowRight} from "lucide-react"
import Link from "next/link"


const Section3 = () => {

    return (
        <div className="w-[90%] mx-auto py-16">
            <div className="px-4">
                <hr className="h-[2px] bg-black" />
                <h4 className="my-5 text-[16px] font-[600] tracking-[1.5px]"> NEW AT MCKINSEY BLOG </h4>
            </div>
            
            <div className="grid grid-cols-3">
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">JobsOhio and the long-term, innovative revitalization of a state’s economy <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>October 6, 2022</em> - How did Ohio become a destination for business growth? A new program turned the state’s economy around, with some help from McKinsey.</p>
                </div>
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">McKinsey’s new Sustainability Academy helps clients upskill workers for the net-zero transition <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>October 6, 2022</em> - How did Ohio become a destination for business growth? A new program turned the state’s economy around, with some help from McKinsey.</p>
                </div>
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>October 6, 2022</em> - How did Ohio become a destination for business growth? A new program turned the state’s economy around, with some help from McKinsey.</p>
                </div>
            </div>
            <div className="text-center pt-6">
                <Link href="/" className="tracking-[1.5px] text-[15px] font-[600]">See all stories <ArrowRight size={16} className="text-blue-600 inline"/></Link>
            </div>
        </div>
    )
}

export default Section3