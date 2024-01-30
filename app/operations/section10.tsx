import React from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const Section10 = () => {

    return (
        <div className="w-[90%] mx-auto mt-16 tracking-[1.5px]">
            <div className="grid grid-cols-3">
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="operation-section10-img w-full h-[200px]"></div>
                    <h4 className="inline text-[23px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Operations Transformation <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]">Transformations that unlock the full potential of operations are sustained by building institutional capabilities and adding agility.</p>
                </div>
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">How a manufacturing moonshot was made <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>October 6, 2022</em> - How did Ohio become a destination for business growth? A new program turned the state’s economy around, with some help from McKinsey.</p>
                </div>
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">How a manufacturing moonshot was made <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>October 6, 2022</em> - How did Ohio become a destination for business growth? A new program turned the state’s economy around, with some help from McKinsey.</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link href="/" className="border text-lg font-[600] border-blue-600 px-12 text-blue-600 py-3 ">See all insights</Link>
            </div>
        </div>
    )
}

export default Section10