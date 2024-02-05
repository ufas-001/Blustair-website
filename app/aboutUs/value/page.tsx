"use client"
import React from "react"
import Section1 from "@/app/components/value/Section1"
import NavBar from "@/app/components/NavBar"
import Footer from "@/app/components/homePage/footer"



const Value = () => {


    return (
        <div>
            <NavBar />
            <div className="pb-24 border-black border-b-[1px]">
                <Section1 />
            </div>
            <Footer />
        </div>
    )
}


export default Value