import React from "react"
import Link from "next/link"
import { Mail } from "lucide-react"


const Section14 = () => {

    return (
        <div className="mt-16 bg-gray-200 border-b-[1px] border-black">
            <div className="py-16 w-[90%] mx-auto flex flex-col md:flex-row justify-between tracking-[1.5px] gap-x-5 gap-y-4">
                <h4 className="text-[24px] md:text-[33px] leading-[40px] md:leading-[50px] font-[600] w-full md:w-[70%]">Connect with our Operations Practice</h4>
                <Link href="/" className="border-[1px] h-[45px] font-[500] w-[200px] text-lg flex justify-center items-center gap-x-2 border-blue-600 bg-blue-600 text-white">
                    <Mail size={20} fontSize="10" className="inline font-[500]" />
                    <span>Contact</span>
                </Link>
            </div>
        </div>
    )
}

export default Section14