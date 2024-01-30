"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionImage from "../../../components/img/daria-pimkina-_y6eXJEkEg8-unsplash.jpg"


const Section7 = () => {
    const [transition, setTransition] = useState(false)
    const [transition2, setTransition2] = useState(false)
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-gray-100">
                <div className="px-4 md:w-[90%] ml-auto pr-20 py-[60px] md:py-[150px]">
                    <h4 className="text-3xl lg:text-5xl font-[600] leading-[50px] lg:leading-[60px]">
                        Are you seeking an exciting role that will challenge and inspire you?
                    </h4>
                    <div className="mt-7 flex flex-col gap-y-3">
                    <Link href="" onMouseOver={() => {setTransition(true)}} onMouseOut={() => setTransition(false)} className="flex items-center space-x-2 w-[120px] hover:text-blue-600">
                        <span className="text-[12px] font-[700]">
                           Career
                        </span>
                        <ArrowRight size="16" className={`${transition ? "transition-transform translate-x-4 duration-500 text-blue-600": "text-blue-600"}`}/>
                    </Link>
                    <Link href="" onMouseOver={() => {setTransition2(true)}} onMouseOut={() => setTransition2(false)} className="flex items-center space-x-2  hover:text-blue-600 text-[12px] font-[700]">
                            Search jobs  &nbsp; <ArrowRight size="16" className={`${transition2 ? "transition-transform translate-x-4 duration-500 text-blue-600": "text-blue-600"}`} />
                    </Link>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-auto section7-img">
            </div>

        </div>
    )
}

export default Section7