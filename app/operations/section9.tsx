import React from "react"
import Link from "next/link"


const Section9 = () => {

    return (
        <div className="mt-16 w-[90%] mx-auto">
            <div className="flex flex-col gap-y-4">
                <h4 className="font-[600] text-base text-center">FEATURED INSIGHTS</h4>
                <div className="flex p-5 hover:shadow-2xl">
                    <div className="w-[40%] section1-cs-img"></div>
                    <div className="w-[60%] pl-9 pt-4 pb-6 flex flex-col gap-y-5">
                        <Link href="/" className="text-5xl font-bold tracking-[1.5px] leading-[60px] hover:text-blue-600 hover:decoration-blue-600 hover:decoration-4 hover:underline">
                            Stepping up: What COOs will need to succeed in 2023 and beyond
                        </Link>
                        <p className="text-xl">The global bank worked closely with QuantumBlack, AI by McKinsey, to build, test, and launch a bespoke customer-facing chatbot that uses the latest gen AI technology to meet customer needs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section9