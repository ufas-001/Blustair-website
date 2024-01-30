import React from "react"
import Link from "next/link"


const Section4 = () => {

    return (
        <div className="mt-16 bg-gray-200">
            <div className="py-8 md:py-16 w-[90%] mx-auto flex flex-col md:flex-row gap-y-3 justify-between tracking-[1.5px]">
                <h4 className="text-[33px] leading-[50px] font-[600] w-[70%]">Learn more about the leadership agenda for Operations</h4>
                <Link href="/" className="border-[1px] h-[45px] w-[200px] text-lg flex items-center justify-center border-blue-600 text-blue-600 font-[600]">
                    Learn more
                </Link>
            </div>
        </div>
    )
}

export default Section4 