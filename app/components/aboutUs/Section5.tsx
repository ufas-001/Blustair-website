import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


const Section5 = () => {

    return (
       <div className="bg-gray-200 py-16">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-8">
                    <div className="flex flex-col gap-y-4">
                        <h4 className="text-[22px] md:text-[24px] font-[600]">Our people & leadership</h4>
                        <p className="text-base md:text-lg">We are defined by our people and are deeply committed to creating a diverse and inclusive culture.</p>
                        <Link href="/"  className="flex items-center gap-x-1 text-[12px] md:text-[15px] font-[600]">Meet our leadership <ArrowRight size={16} className="inline text-blue-400" /></Link>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h4 className="text-[22px] md:text-[24px] font-[600]">Purpose, mission & values</h4>
                        <p className="text-base md:text-lg">We are defined by our people and are deeply committed to creating a diverse and inclusive culture.</p>
                        <Link href="/"  className="flex items-center gap-x-1 text-[12px] md:text-[15px] font-[600]">Learn about our values <ArrowRight size={16} className="inline text-blue-400" /></Link>
                        <Link href="/"  className="flex items-center gap-x-1 text-[12px] md:text-[15px] font-[600]">Explore the history of our firm <ArrowRight size={16} className="inline text-blue-400" /></Link>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h4 className="text-[22px] md:text-[24px] font-[600]">Our aspiration</h4>
                        <p className="text-base md:text-lg">We are defined by our people and are deeply committed to creating a diverse and inclusive culture.</p>
                        <Link href="/"  className="flex items-center gap-x-1 text-[12px] md:text-[15px] font-[600]">Explore a new kind of growth <ArrowRight size={16} className="inline text-blue-400" /></Link>
                    </div>
                </div>
            </div>
       </div> 
    )
}

export default Section5