"use client"
import React, { useState } from "react";
import Image from "next/image";
import SectionImage from "../../../components/img/grid.jpg"
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const Section6 = () => {
    const [transition, setTransition] = useState(false)
    const [transition2, setTransition2] = useState(false)
    return (
        <div className="py-14 flex flex-col md:flex-row">
            <div className="w-3/4 md:w-2/5 mx-auto md:ml-auto h-[300px] md:h-auto section2-img">
            </div>
            <div className="md:w-1/2 md:pb-20">
                <div className="lg:pl-20 px-4 md:pr-10 lg:pr-14 pt-16 pb-10">
                    <h4 className="text-3xl lg:text-5xl font-[600] leading-[50px] lg:leading-[60px]">What does it mean to accelerate sustainable and inclusive growth?</h4>
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
            </div>
        </div>
    )
}

export default Section6