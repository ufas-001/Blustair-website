import React from "react"
import { ChevronRight } from "lucide-react"


const Section9 = () => {

    return (
        <div className="mt-16 w-[90%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[23px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Diversity at work: Conversations on identity <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>June 10, 2021</em> - What does diversity look like at work? And what is it like to be a part of that diversity? Colleagues discuss the complexity of convergent identities, and how allies everywhere can offer support.</p>
                </div>
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[23px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Making It Work: On giving birth during the pandemic—and returning from maternity leave with a renewed sense of urgency <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>March 18, 2021</em> - This month we’re talking to several McKinsey women about how they’ve made it work over the last year—the surprising challenges, unexpected joys, and how the last 12 months have shaped their outlook on life and work.</p>
                </div>
                <div className="flex flex-col gap-y-4 p-4 hover:shadow-2xl">
                    <div className="section2a-cs-img w-full h-[200px]"></div>
                    <h4 className="inline text-[23px] font-[600] tracking-[1.5px] hover:underline hover:decoration-2 hover:decoration-blue-600 hover:underline-offset-8 hover:text-blue-600">Mapping the Black experience in film and TV <ChevronRight size={30} className="inline font-[900] text-blue-600" /></h4>
                    <p className="text-[19px] font-[50] tracking-[1.5px]"><em>March 11, 2021</em> - Meet Nony Onyeador, a McKinsey consultant and writer at heart whose research aims to help create change in the entertainment industry.</p>
                </div>
            </div>
        </div>
    )
}

export default Section9 