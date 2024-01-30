import React from "react"
import { ChevronRight } from "lucide-react"


const Section7 = () => {

    return (
        <div className="mt-16 w-[90%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[23px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Operations Transformation <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]">Transformations that unlock the full potential of operations are sustained by building institutional capabilities and adding agility.</p>
                </div>
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[23px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Environmentally sustainable operations <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]">Environmental sustainability is moving from aspiration to expectation for all stakeholders, from investors to clients, customers, and employees. Read our latest thinking on using environmentally focused operations as a source of competitive advantage.</p>
                </div>
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[23px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Resilience and Imagination <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]">Success in the next normal demands resilience throughout the entire value chain, from the application of advanced analytics to improved supply chain visibility. Learn more about how we’re helping companies reimagine their operations.</p>
                </div>
            </div>
        </div>
    )
}

export default Section7 