"use client"
import React from "react"
import NavBar from "../components/NavBar"
import Banner from "../components/aboutUs/Banner"
import Section1 from "../components/aboutUs/Section1"
import Section2 from "../components/aboutUs/Section2"
import Section3 from "../components/aboutUs/Section3"
import Section4 from "../components/aboutUs/Section4"
import Section5 from "../components/aboutUs/Section5"
import Section6 from "../components/aboutUs/Section6"
import Section7 from "../components/aboutUs/Section7"
import Section8 from "../components/aboutUs/Section8"
import Section9 from "../components/aboutUs/Section9"
import Footer from "../components/homePage/footer"

const AboutUs = () => {

    return (
        <div className="tracking-[1.5px]">
            <NavBar />
            <Banner />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Footer />
        </div>
    )
}

export default AboutUs