import React from "react";
import Image from "next/image";
import SectionImage from "../../../components/img/conference.png"
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const Section5 = () => {

    return (
        <div className="flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/2 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 pl-8 pt-[80px] pb-10">
                    <p className="text-[12px] font-[700] pb-1">December 5, 2023</p>
                    <h4 className="text-lg font-[600] leading-8 pr-16">The “Missing Billion”: creating health equity through data for people with disabilities</h4>
                </div>
                <div className="w-full md:w-1/2 section5-img h-[400px] md:h-auto">
                </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col md:flex-row-reverse xl:flex-row">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="pt-8 pb-10 pl-8">
                        <p className="text-[12px] font-[700] pb-1">December 5, 2023</p>
                        <h4 className="text-lg font-[600] leading-8 w-full pr-16">The “Missing Billion”: creating health equity through data for people with disabilities</h4>
                    </div>
                    <div className="bg-blue-4a00 pl-8 py-5 h-full">
                        <Link href="" className="flex items-center justify-center md:justify-start space-x-2 text-white">
                            <span className="text-sm md:text-start font-[700]">Read more on our blog</span>
                            <ArrowRight size="16" />
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 section5-img h-[400px] md:h-auto"></div>
            </div>
        </div>
    )
}


export default Section5