"use client"
import React, { useState } from "react";
import SectionImage from "../../../components/img/grid.jpg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Section2 = () => {
    const [transition, setTransition] = useState(false)
    const [transition2, setTransition2] = useState(false)
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="bg-gray-100 md:w-1/2 px-4 md:px-0 md:pl-14 lg:pl-20 md:pr-10 lg:pr-14 pt-16 pb-10">
                <div className="flex flex-col">
                    <h2 className="text-3xl lg:text-5xl font-[600] leading-[50px] lg:leading-[60px]">
                        Young Global Leaders on Davos 2024
                    </h2>
                    <p className="text-base lg:text-lg mt-6 leading-9">What can we expect at Davos 2024? Young Global Leaders , current and alumni, share their thoughts on topics that they think will dominate the Davos agenda—–and those that they believe should get more attention.</p>
                </div>
                <div className="mt-7 flex flex-col gap-y-3">
                    <Link href="" onMouseOver={() => {setTransition(true)}} onMouseOut={() => setTransition(false)} className="flex items-center space-x-2 w-[120px] hover:text-blue-600">
                        <span className="text-[12px] font-[700]">
                           Discover more
                        </span>
                        <ArrowRight size="16" className={`${transition ? "transition-transform translate-x-4 duration-500 text-blue-600": "text-blue-600"}`}/>
                    </Link>
                    <Link href="" onMouseOver={() => {setTransition2(true)}} onMouseOut={() => setTransition2(false)} className="flex items-center space-x-2  hover:text-blue-600 text-[12px] font-[700]">
                            Learn about McKinsey’s strategic partnership with WEF  &nbsp; <ArrowRight size="16" className={`${transition2 ? "transition-transform translate-x-4 duration-500 text-blue-600": "text-blue-600"}`} />
                    </Link>
                </div>
            </div>
            <div className=" w-full md:w-1/2 h-[400px] md:h-auto section2-img"></div>
        </div>
    )
}

export default Section2