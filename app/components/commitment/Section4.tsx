import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"



const Section4 = () => {

    return (
        <div className="w-[90%] mx-auto mt-24 flex flex-col gap-y-10">
            <h4 className="text-base font-[600] tracking-[1.5px] text-center">LATEST THINKING</h4>
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="about-us-sec8-img h-[350px]"></div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col ">
                            <span className="text-[16px]">Article</span>
                            <Link href="/" className="inline text-[24px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-2 hover:text-blue-600">Race in the UK workplace: The intersectional experience</Link>
                        </div>
                        <p className="text-[20px] font-[50]"> <em>May 12, 2022</em> - Despite meaningful progress, achieving workplace equity has proved challenging. Addressing intersectional communities—such as Black, Bangladeshi, and Pakistani women—could yield far-reaching benefits.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="about-us-sec8b-img h-[350px]"></div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col">
                            <span className="text-[16px]">Impact story</span>
                            <Link href="/" className="inline text-[24px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-2 hover:text-blue-600">2022 ESG Report </Link>
                        </div>
                        <p className="text-[20px] font-[50]">Our annual report summarizes the significant strides we have made across insights, client service, and our own firm in advancing sustainable and inclusive growth around the world.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Section4