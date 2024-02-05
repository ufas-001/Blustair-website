import React from "react"
import Link from "next/link"
import { Mail } from "lucide-react"


const Section11 = () => {

    return (
        <div className="mt-16 bg-gray-200 border-b-[1px] border-black">
            <div className="py-16 w-[90%] mx-auto flex flex-col md:flex-row justify-between tracking-[1.5px] gap-x-5 gap-y-4">
                <h4 className="text-[24px] md:text-[33px] leading-[40px] md:leading-[50px] font-[600] w-full md:w-[70%]">Learn what it’s like to work at McKinsey on our Careers site.</h4>
                <Link href="/" className="border-[1px] h-[45px] w-[200px] text-lg flex items-center justify-center border-blue-600 text-blue-600 font-[600]">
                    Meet our people
                </Link>
            </div>
        </div>
    )
}

export default Section11