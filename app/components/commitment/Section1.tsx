import React from "react"
import Link from "next/link"
import { Youtube, Linkedin, Facebook, Twitter } from "lucide-react"

const Section1 = () => {


    return (
        <div className="mt-24 w-[90%] mx-auto flex flex-col gap-y-12">
            <div className="flex justify-center gap-x-3">
                <Link href="" className="relative border-[1px] block w-10 h-10 bg-black rounded-full hover:bg-blue-600 hover:bounce-icon">
                    <Linkedin width="19" className="absolute top-[5px] text-white left-[9px]" />
                </Link>
                <Link href="" className="relative border-[1px] block w-10 h-10 bg-black rounded-full hover:bg-blue-600">
                    <Facebook width="19" className="absolute top-[6px] text-white left-[9px]" />
                </Link>
                <Link href="" className="relative border-[1px] block w-10 h-10 bg-black rounded-full hover:bg-blue-600">
                    <Twitter width="19" className="absolute top-[6px] text-white left-[9px]" />
                </Link>
            </div>
            <p className="text-3xl text-center leading-[40px]">
                We have a deep and longstanding commitment to advancing diversity, equity, and inclusion in business, in society, and within our firm.
            </p>
            <div className="flex justify-between ">
                <p className="text-lg w-1/2 pr-4 leading-[30px]">
                    At McKinsey, diversity, equity, and inclusion are not just moral imperatives, they are integral to our dual mission—to help our clients make substantial, lasting performance improvements and to build a firm that attracts, develops, excites, and retains exceptional people.
                </p>
                <p className="text-lg w-1/2 pl-4 leading-[30px]">
                    Through our groundbreaking research, we have set out a compelling business and economic case for diversity. Using our global reach, we share our insights, convene partnerships for action, and serve clients to inform critical decision-makers with the power to make real change.
                </p>
            </div>
        </div>
    )
}

export default Section1