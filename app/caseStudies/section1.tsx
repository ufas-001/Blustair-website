import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionImage from "../../components/img/balloon-381334_640.png"


const Section1 = () => {


    return (
        <div className="w-[90%] mx-auto pt-12 md:pt-24">
            <div className="flex flex-col gap-y-14 lg:gap-y-20">
                <h1 className="text-center text-[40px] md:text-5xl font-bold">Case Studies</h1>
                <p className="text-xl md:text-2xl text-center tracking-wide leading-[40px] font-[50]">Our clients around the world are achieving enduring change in their capabilities and performance. Leading with technology, we partner with them to see new potential for growth, innovate to net zero, and build capabilities across their entire organization, creating impact that goes beyond financial and operational performance improvements. Here&apos;s what that looks like.</p>
            </div>
            <div className="flex flex-col gap-y-4 md:flex-row mt-16 p-5 md:hover:shadow-2xl">
                <div className="w-full h-[300px] md:w-[40%] md:h-[250px] section1-cs-img"></div>
                <div className="w-full md:w-[60%] md:pl-9 flex flex-col gap-y-5">
                    <Link href="/" className="text-[35px] lg:text-[40px] xl:text-5xl font-bold tracking-[1.5px] leading-[45px] xl:leading-[60px] hover:text-blue-600 hover:decoration-blue-600 hover:decoration-4 hover:underline">
                        Banking on innovation: How ING uses generative AI to put people first
                    </Link>
                    <p className="text-lg lg:text-xl">The global bank worked closely with QuantumBlack, AI by McKinsey, to build, test, and launch a bespoke customer-facing chatbot that uses the latest gen AI technology to meet customer needs.</p>
                </div>
            </div>
        </div>
    )
}

export default Section1