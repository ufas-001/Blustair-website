import React from "react";
import { ChevronRight } from "lucide-react";




const Section2 = () => {

    return (
        <div className="w-[90%] mx-auto tracking-[1.5px]">
            <hr className="h-[2px] bg-black mx-4"/>
            <div className=" pt-8 flex flex-col gap-y-6 ">
                <h4 className="font-[600] text-base px-4">HOW WE HELP CLIENTS</h4>
                <div className="grid grid-cols-4">
                    <div className="px-5 pt-4 pb-6 flex flex-col gap-y-5 hover:shadow-2xl">
                        <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Capital Excellence <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                        <p className="text-[17px] leading-[30px] font-[50] tracking-[1.5px]">Helping organizations achieve higher and faster returns by deploying best-in-class thinking across the capital projects portfolio and project delivery value chain</p>
                    </div>
                    <div className="px-5 pt-4 pb-6 flex flex-col gap-y-5 hover:shadow-2xl">
                        <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Manufacturing & Supply Chain <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                        <p className="text-[17px] leading-[30px] font-[50] tracking-[1.5px]">Creating a lasting impact in global manufacturing and supply-chain operations</p>
                    </div>
                    <div className="px-5 pt-4 pb-6 flex flex-col gap-y-5 hover:shadow-2xl">
                        <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Product Development & Procurement <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                        <p className="text-[17px] leading-[30px] font-[50] tracking-[1.5px]">Helping organizations achieve higher and faster returns by deploying best-in-class thinking across the capital projects portfolio and project delivery value chain</p>
                    </div>
                    <div className="px-5 pt-4 pb-6 flex flex-col gap-y-5 hover:shadow-2xl">
                        <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Service Operations <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                        <p className="text-[17px] leading-[30px] font-[50] tracking-[1.5px]">Transforming customer experience, and enterprise efficiency and effectiveness</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2