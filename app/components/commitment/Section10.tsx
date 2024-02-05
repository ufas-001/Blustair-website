import React from "react";
import { ChevronRight } from "lucide-react";




const Section10 = () => {

    return (
        <div className="w-[90%] mx-auto mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div className="p-4 flex flex-col gap-y-5 hover:shadow-2xl">
                    <div className="h-[150px] commit-section10"></div>
                    <h4 className="inline text-[22px] font-[600] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">In Abu Dhabi, the next generation is learning that good leadership blends head and heart <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                </div>
                <div className="p-4 flex flex-col gap-y-5 hover:shadow-2xl">
                    <div className="h-[150px] commit-section10"></div>
                    <h4 className="inline text-[22px] font-[600] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Our Black Voices: The journey to capture the perspectives of McKinsey’s Black colleagues <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                </div>
                <div className="p-4 flex flex-col gap-y-5 hover:shadow-2xl">
                    <div className="h-[150px] commit-section10"></div>
                    <h4 className="inline text-[22px] font-[600] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Where are we on gender equality? “Two steps forward, one step back.” <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                </div>
                <div className="p-4 flex flex-col gap-y-5 hover:shadow-2xl">
                    <div className="h-[150px] commit-section10"></div>
                    <h4 className="inline text-[22px] font-[600] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">What does being LGBTQ+ in the workplace look like today? <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                </div>
            </div>
        </div>
    )
}

export default Section10