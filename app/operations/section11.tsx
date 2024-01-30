import React from "react"
import { ChevronRight } from "lucide-react"



const Section11 = () => {

    return (
        <div className="mt-24 w-[90%] mx-auto flex flex-col gap-y-4 tracking-[1.5px]">
            <h4 className="font-[600] text-base text-center">RELATED</h4>
            <div className="grid grid-cols-3">
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Solving the digital manufacturing disconnect: A case study <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>October 6, 2022</em> - Scaling digital transformation across factory networks can be fraught with challenges. However, one food-manufacturing company took a pragmatic, network-based approach that successfully helped it scale the right digital solutions across more than 40 plants—quickly. In just 12 months, the business was able to transform 20 factories, increasing efficiencies on production lines and improving the bottom line.</p>
                </div>
                <div className="flex flex-col gap-y-6 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[22px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">How a manufacturing moonshot was made <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>October 6, 2022</em> - How did Ohio become a destination for business growth? A new program turned the state’s economy around, with some help from McKinsey.</p>
                </div>
            </div>

        </div>
    )
}

export default Section11