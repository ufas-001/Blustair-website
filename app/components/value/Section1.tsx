import React from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react" 

const Section1 = () => {


    return (
        <div className="w-[90%] mx-auto flex">
            <div className="w-[70%] pr-[40px] flex flex-col gap-y-14">
                <div className="flex flex-col gap-y-6 mt-[40px]">
                   <Link href="/aboutUs" className="text-[15px] flex items-center"><ChevronLeft size={16} className="inline" /> Back About Us </Link> 
                    <h4 className="text-5xl font-[600]">Our purpose, mission, and values</h4>
                    <p className="text-xl leading-[30px]">To help our clients make distinctive, lasting, and substantial improvements in their performance and to build a great firm that attracts, develops, excites, and retains exceptional people.</p>
                    <p className="text-xl leading-[30px]">We are a values-driven organization. Our values reflect the thinking of our founder, James O. McKinsey, and Marvin Bower, managing director from 1950 to 1967, who was a major force in shaping the firm. Our values have been updated in small ways to reflect the changing times. They inform both our long-term strategy as a firm and the way we serve our clients on a daily basis. We put aside one day a year to reflect as a group on what our values mean to both our work and our lives.</p>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h4 className="text-4xl font-[600]">
                        Our purpose
                    </h4>
                    <p className="text-lg leading-[30px]">
                        To help create positive, enduring change in the world.
                    </p>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h4 className="text-4xl font-[600]">
                        Our mission
                    </h4>
                    <p className="text-lg leading-[30px]">
                        To help our clients make distinctive, lasting, and substantial improvements in their performance and to build a great firm that attracts, develops, excites, and retains exceptional people.
                    </p>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h4 className="text-4xl font-[600]">
                        Our values
                    </h4>
                    <div className="flex flex-col gap-y-5">
                        <h4 className="text-[28px] font-[600]">Adhere to the highest professional standards</h4>
                        <ul className="list-disc list-inside text-xl flex flex-col gap-y-3">
                            <li className="ml-6">put client interests ahead of our firm’s</li>
                            <li className="ml-6">maintain high standards and conditions for client service</li>
                            <li className="ml-6">observe high ethical standards</li>
                            <li className="ml-6">preserve client confidences</li>
                            <li className="ml-6">maintain an independent perspective</li>
                            <li className="ml-6">manage client and firm resources cost-effectively</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h4 className="text-[28px] font-[600]">Adhere to the highest professional standards</h4>
                        <ul className="list-disc list-inside text-xl flex flex-col gap-y-3">
                            <li className="ml-6">put client interests ahead of our firm’s</li>
                            <li className="ml-6">maintain high standards and conditions for client service</li>
                            <li className="ml-6">observe high ethical standards</li>
                            <li className="ml-6">preserve client confidences</li>
                            <li className="ml-6">maintain an independent perspective</li>
                            <li className="ml-6">manage client and firm resources cost-effectively</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h4 className="text-[28px] font-[600]">Adhere to the highest professional standards</h4>
                        <ul className="list-disc list-inside text-xl flex flex-col gap-y-3 ">
                            <li className="ml-6">put client interests ahead of our firm’s</li>
                            <li className="ml-6">maintain high standards and conditions for client service</li>
                            <li className="ml-6">observe high ethical standards</li>
                            <li className="ml-6">preserve client confidences</li>
                            <li className="ml-6">maintain an independent perspective</li>
                            <li className="ml-6">manage client and firm resources cost-effectively</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[30%]"></div>
        </div>
    )
}


export default Section1