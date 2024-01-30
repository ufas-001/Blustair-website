import React from "react";
import Image from "next/image";
import Meeting from "../../../components/img/meetings.jpg"
import Waves from "../../../components/img/pngtree.png"
import Link from "next/link";

const Section4 = () => {
    return (
        <div className="mt-14">
            <h4 className="text-lg font-[600] text-center mb-7">NEW AT MCKINSEY BLOG</h4>
            <div className="flex flex-col xl:flex-row h-auto">
                <div className="w-full xl:w-1/2 relative h-[400px] xl:h-auto section4a-img transition-transform transform-gpu hover:scale-110 duration-300 transform-origin-center">
                    <div className="absolute bottom-0 left-8 text-white">
                        <Link href="" className="flex flex-col mb-6 gap-y-2">
                            <p className="font-[600] text-[12px]">December 19, 2023</p>
                            <h4 className="text-2xl font-[600]">A year of impact-powered by people</h4>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-full xl:w-1/2">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="section4b-img h-[200px] md:w-1/2 md:h-auto"></div>
                        <div className="md:w-1/2 ml-6 pt-14 flex flex-col gap-y-2 mb-7">
                            <p className="text-[12px] font-[600]">December 3, 2023</p>
                            <h4 className="text-lg font-[600] w-full lg:w-[200px] leading-8 mr-16">McKinsey named a Leader in Digital Transformation Services by Forbes</h4>
                        </div>
                    </div>
                    <div className="bg-blue-400 text-white h-full pb-8">
                        <div className="ml-6 pt-10 flex flex-col gap-y-2">
                            <p className="text-[12px] font-[600]">December 3, 2023</p>
                            <h4 className="text-lg font-[600] leading-9 w-full lg:w-[300px]">McKinsey named a Leader in Digital Transformation Services by Forbes</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4