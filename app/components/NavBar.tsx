import React, { useState } from "react";
import Mobilemenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import {Search, Menu, ArrowRight, ChevronDown} from "lucide-react";
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



const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleCloseMobileMenu = () => {
      setMobileMenuOpen(false);
    };

    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

    const handleCloseDesktopMenu = () => {
      setDesktopMenuOpen(false);
    };

    return (
        <div className="tracking-[1.5px] pb-4">
            <div className="flex items-center w-full lg:pl-6 md:ml-auto justify-between h-[65px]">
                <div className="flex flex-row gap-x-10">
                    <div className="flex space-x-6 items-center">
                        <div className="hidden xl:flex">
                          <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setDesktopMenuOpen(true)}
                          >
                            <span className="sr-only">Open main menu</span>
                            <Menu className="h-6 w-6 text-black" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="flex xl:hidden">
                          <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                          >
                            <span className="sr-only">Open main menu</span>
                            <Menu className="h-6 w-6 text-black"  aria-hidden="true" />
                          </button>
                        </div>
                        <Image src={Logo} className="w-[100px] md:w-[180px]" alt="logo"/>
                    </div>
                    <ul className="hidden xl:flex text-black font-[100] space-x-6 text-lg items-end">
                        {
                            dataList.map((data, index) => (
                                    <HoverCard key={index} openDelay={200} closeDelay={100}>
                                        <HoverCardTrigger className="text-black font-[500] flex space-x-2 items-center cursor-pointer hover:border-b-2 border-blue-600">
                                            <span>{data.name}</span>
                                            <ChevronDown size="16" />
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-[90vw] rounded-none mx-auto">
                                            <div className="grid grid-cols-3 text-sm gap-y-5 px-6 py-9">
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Aerospace & Defense</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Agriculture</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Automotive & Assembly</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Chemicals</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Consumer Packaged Goods</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Education</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Electric Power & Natural Gas</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Engineering, Construction & Building Materials</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Financial Services</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Industrials & Electronics</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Aerospace & Defense</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Agriculture</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Automotive & Assembly</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Chemicals</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Consumer Packaged Goods</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Education</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Electric Power & Natural Gas</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Engineering, Construction & Building Materials</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Financial Services</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Industrials & Electronics</Link>
                                                <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" href="/">Aerospace & Defense</Link>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                            ))
                        }
                        <Link href="/caseStudies" className="flex space-x-2 items-center hover:border-b-2 hover:border-blue-600 hover:text-blue-600">
                            <span>Case Studies</span>
                        </Link>
                        <Link href="/" className="flex space-x-2 items-center">
                            <span>Blog</span>
                        </Link>
                    </ul>
                </div>
               <div className="flex text-black flex-col gap-y-3 font-[50] text-base justify-between mr-5">
                    <div className="hidden md:flex space-x-2">
                        <span>Sign In</span>
                        <div>|</div>
                        <span>Subscribe</span>
                    </div>
                    <div className="self-end">
                        <Search size="20" />
                    </div>
                </div>
            </div>
            <Mobilemenu open={mobileMenuOpen} onClose={handleCloseMobileMenu} />
            <DesktopMenu open={desktopMenuOpen} onClose={handleCloseDesktopMenu} />
        </div>
    )
}

export default NavBar