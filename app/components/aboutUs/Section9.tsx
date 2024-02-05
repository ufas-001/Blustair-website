import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const Section9 = () => {

    return (
        <div className="bg-blue-400 py-16 text-white">
            <div className="w-[90%] mx-auto flex flex-col gap-y-4">
                <h4 className="text-base font-[600] text-center">KEEP EXPLORING</h4>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col gap-y-4 p-4">
                        <div className="about-us-sec9-img h-[200px]"></div>
                        <Link href='/' className="text-[26px] font-[600]">McKinsey Blog <ChevronRight size={26} className="text-blue-600 inline" /></Link>
                        <p className="text-base">A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.</p>
                    </div>
                    <div className="flex flex-col gap-y-4 p-4">
                        <div className="about-us-sec9-img h-[200px]"></div>
                        <Link href='/' className="text-[26px] font-[600]">McKinsey Blog <ChevronRight size={26} className="text-blue-600 inline" /></Link>
                        <p className="text-base">A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.</p>
                    </div>
                    <div className="flex flex-col gap-y-4 p-4">
                        <div className="about-us-sec9-img h-[200px]"></div>
                        <Link href='/' className="text-[26px] font-[600]">McKinsey Blog <ChevronRight size={26} className="text-blue-600 inline" /></Link>
                        <p className="text-base">A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.</p>
                    </div>
                    <div className="flex flex-col gap-y-4 p-4">
                        <div className="about-us-sec9-img h-[200px]"></div>
                        <Link href='/' className="text-[26px] font-[600]">McKinsey Blog <ChevronRight size={26} className="text-blue-600 inline" /></Link>
                        <p className="text-base">A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section9