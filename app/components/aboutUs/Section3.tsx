import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


const Section3 = () => {

    return (
        <div className="w-[90%] mx-auto my-16">
            <div className="grid grid-cols-4 gap-x-8">
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-[26px] font-[600]">Our people & leadership</h4>
                    <p className="text-lg">We are defined by our people and are deeply committed to creating a diverse and inclusive culture.</p>
                    <Link href="/"  className="flex items-center gap-x-1 text-[15px] font-[600]">Meet our leadership <ArrowRight size={20} className="inline text-blue-400" /></Link>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-[26px] font-[600]">Purpose, mission & values</h4>
                    <p className="text-lg">We are defined by our people and are deeply committed to creating a diverse and inclusive culture.</p>
                    <Link href="/"  className="flex items-center gap-x-1 text-[15px] font-[600]">Learn about our values <ArrowRight size={20} className="inline text-blue-400" /></Link>
                    <Link href="/"  className="flex items-center gap-x-1 text-[15px] font-[600]">Explore the history of our firm <ArrowRight size={20} className="inline text-blue-400" /></Link>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-[26px] font-[600]">Our aspiration</h4>
                    <p className="text-lg">We are defined by our people and are deeply committed to creating a diverse and inclusive culture.</p>
                    <Link href="/"  className="flex items-center gap-x-1 text-[15px] font-[600]">Explore a new kind of growth <ArrowRight size={20} className="inline text-blue-400" /></Link>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-[26px] font-[600]">Our governance</h4>
                    <p className="text-lg">We are defined by our people and are deeply committed to creating a diverse and inclusive culture.</p>
                    <Link href="/"  className="flex items-center gap-x-1 text-[15px] font-[600]">Learn about our governance <ArrowRight size={20} className="inline text-blue-400" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Section3