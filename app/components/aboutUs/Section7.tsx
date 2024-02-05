import React from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"


const Section7 = () => {

    return (
        <div className="w-[90%] mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-6">
                <div className="flex flex-col gap-y-5">
                    <Link href="/" className="text-[22px] md:text-[26px] font-[600] hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-blue-600 hover:text-blue-600">
                        Diversity, equity & inclusion <ChevronRight  className="inline text-blue-600  text-xl md:text-2xl" />
                    </Link>
                    <p className="text-base md:text-lg">Prioritizing these moral imperatives within our firm, in business, and in society.</p>
                    <Link href="/" className="flex items-center gap-x-1 text-[12px] md:text-[15px] font-[600] hover:text-blue-600">
                        Find out more <ArrowRight size={16} className="inline text-blue-600" />
                    </Link>
                </div>
                <div className="flex flex-col gap-y-5">
                    <Link href="/" className="text-[22px] md:text-[26px] font-[600] hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-blue-600 hover:text-blue-600">
                        Social responsibility <ChevronRight className="inline text-blue-600 text-xl md:text-2xl" />
                    </Link>
                    <p className="text-base md:text-lg">Prioritizing these moral imperatives within our firm, in business, and in society.</p>
                    <Link href="/" className="flex items-center gap-x-1 text-[12px] md:text-[15px] font-[600] hover:text-blue-600">
                        Find out more <ArrowRight size={16} className="inline text-blue-600" />
                    </Link>
                </div>
                <div className="flex flex-col gap-y-5">
                    <Link href="/" className="text-[22px] md:text-[26px] font-[600] hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-blue-600 hover:text-blue-600">
                        Environmental sustainability <ChevronRight className="inline text-blue-600 text-xl md:text-2xl" />
                    </Link>
                    <p className="text-base md:text-lg">Prioritizing these moral imperatives within our firm, in business, and in society.</p>
                    <Link href="/" className="flex items-center gap-x-1 text-[12px] md:text-[15px] font-[600] hover:text-blue-600">
                        Find out more <ArrowRight size={16} className="inline text-blue-600" />
                    </Link>
                </div>
                <div className="flex flex-col gap-y-5">
                    <Link href="/" className="text-[22px] md:text-[26px] font-[600] hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-blue-600 hover:text-blue-600">
                        2022 ESG Report <ChevronRight className="inline text-blue-600 text-xl md:text-2xl" />
                    </Link>
                    <p className="text-base md:text-lg">Prioritizing these moral imperatives within our firm, in business, and in society.</p>
                    <Link href="/" className="flex items-center gap-x-1 text-[12px] md:text-[15px] font-[600] hover:text-blue-600">
                        Find out more <ArrowRight size={16} className="inline text-blue-600" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section7 