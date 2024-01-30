"use client"
import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Footer from "../components/homePage/footer";



const CaseStudies = () => {

    return (
        <div>
            <NavBar />
            <hr className="h-[2px] bg-gray-50" />
            <Section1 />
            <Section2 />
            <Section3 />
            <hr className="h-[2px] bg-black" />
            <Footer />
        </div>
    )
}

export default CaseStudies