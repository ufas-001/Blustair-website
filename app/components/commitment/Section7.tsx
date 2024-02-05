import React from "react"
import GoogleImage from "@/components/img/Google_2015_logo.svg.png"
import SlackImage from "@/components/img/download__5_-removebg-preview.png"
import BloombergImage from "@/components/img/bloomberg-removebg-preview.png"
import Image from "next/image"

const Section7 = () => {


    return (
        <div className="w-[90%] mx-auto mt-16 mb-[80px]">
            <hr className="h-[2px] bg-black"/>
            <div className="mt-6 flex flex-col gap-y-[80px]">
                <h4 className="font-[600] text-base tracking-[1.5px]">OUR PARTNERSHIPS</h4>
                <div className="grid grid-cols-3 gap-x-20">
                <Image alt="img" src={GoogleImage} className="h-[100px]" />
                <Image alt="img" src={BloombergImage} className="h-[100px]" />
                <Image alt="img" src={SlackImage} className="h-[100px]" />
                
            </div>
            </div>
            
        </div>
    )
}

export default Section7