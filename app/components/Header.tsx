"use client"
import React, { useState } from "react";
import Mobilemenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import {Search, Menu, ArrowRight, ChevronDown} from "lucide-react";
import NavBar from "./NavBar";
import Image from "next/image";
import Logo from "../../components/img/blustair_+_icon-removebg-preview.png"
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const dataList = [
    {
        name: "Industries",
        href: "/"
    },
    {
        name: "Companies",
        href: "/"
    },
    {
        name: "Features",
        href: "/"
    },
    {
        name: "Capabilities",
        href: "/"
    }
]


const Header = () => {
    const [transition, setTransition] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleCloseMobileMenu = () => {
      setMobileMenuOpen(false);
    };

    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

    const handleCloseDesktopMenu = () => {
      setDesktopMenuOpen(false);
    };

    return (
        <div className="relative text-white">
            <div className="w-full h-[560px] header-img"></div>
            <div className="w-full absolute top-0">
                <NavBar />
                <div className="text-black mt-10 px-5 md:mt-12 xl:w-[96%] ml-auto">
                    <h1 className="text-3xl md:pr-20 md:text-5xl font-[600] leading-[50px] md:leading-[60px] w-full md:w-[500px] ">
                        How to transition out of the CEO role   
                    </h1>
                    <p className="w-full pr-10 md:w-[500px] mt-4 text-base md:text-lg leading-9">Making an effective exit from leadership is critical both to the organization’s future and the CEO’s legacy. Here is how the world’s best CEOs approach that transition.</p>
                    <div className="mt-10 text-blue-500">
                        <Link href="" onMouseOver={() => {setTransition(true)}} onMouseOut={() => setTransition(false)} className="flex items-center space-x-2 w-[120px]">
                            <span className="text-[14px] font-[700]">
                               Learn more
                            </span>
                            <ArrowRight size="16" className={`${transition ? "transition-transform translate-x-4 duration-500": ""}`}/>
                        </Link>
                    </div>
                </div>
            </div>
            <Mobilemenu open={mobileMenuOpen} onClose={handleCloseMobileMenu} />
            <DesktopMenu open={desktopMenuOpen} onClose={handleCloseDesktopMenu} />
        </div>
    )

}


export default Header   