import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const Section5 = () => {

    return (
        <div className="w-[90%] mx-auto mt-16">
            <div className="grid grid-cols-4">
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="about-us-sec9-img h-[200px]"></div>
                    <div className="flex flex-col gap-y-2">
                        <span className="text-[15px]">Article - McKinsey Institute for Black Economic Mobility</span>
                        <Link href='/' className="text-[24px] font-[600]">Building supportive ecosystems for Black-owned US businesses <ChevronRight size={26} className="text-blue-600 inline" /></Link>
                    </div>
                    <p className="text-xl leading-[30px]"><em>October 29, 2020</em> - The right business ecosystems can mitigate or negate the effects of structural obstacles to business building for Black business...</p>
                </div>
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="about-us-sec9-img h-[200px]"></div>
                    <div className="flex flex-col gap-y-2">
                        <span className="text-[15px]">Article - MGI Research</span>
                        <Link href='/' className="text-[24px] font-[600]">COVID-19 and gender equality: Countering the regressive effects <ChevronRight size={26} className="text-blue-600 inline" /></Link>
                    </div>
                    <p className="text-xl leading-[30px]"><em>October 29, 2020</em> - The right business ecosystems can mitigate or negate the effects of structural obstacles to business building for Black business...</p>
                </div>
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="about-us-sec9-img h-[200px]"></div>
                    <div className="flex flex-col gap-y-2">
                        <span className="text-[15px]">Interactive</span>
                        <Link href='/' className="text-[24px] font-[600]">Diversity wins: How inclusion matters <ChevronRight size={26} className="text-blue-600 inline" /></Link>
                    </div>
                    <p className="text-xl leading-[30px]"><em>October 29, 2020</em> - The right business ecosystems can mitigate or negate the effects of structural obstacles to business building for Black business...</p>
                </div>
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="about-us-sec9-img h-[200px]"></div>
                    <div className="flex flex-col gap-y-2">
                        <span className="text-[15px]">Article - McKinsey Quarterly</span>
                        <Link href='/' className="text-[24px] font-[600]">Diversity still matters <ChevronRight size={26} className="text-blue-600 inline" /></Link>
                    </div>
                    <p className="text-xl leading-[30px]"><em>May 19, 2020</em> - Inclusion and diversity are at risk in the crisis—but are critical for business recovery, resilience, and reimagination.</p>
                </div>
            </div>
        </div>
    )
}

export default Section5