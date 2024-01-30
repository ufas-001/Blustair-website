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
        name: "Capabilities",
        href: "/",
        links: [
            {
                name: "Operations",
                href: "/operations"
            }
        ]
    },
    {
        name: "Features",
        href: "/",
        links: [
            {
                name: "",
                href: "/"
            }
        ]
    },
    {
        name: "About Us",
        href: "/",
        links: [
            {
                name: "value",
                href: "/"
            },
            {
                name: "Commitment",
                href: "/"
            }
        ]
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
                        <Link href="/">
                            <Image src={Logo} className="w-[100px] md:w-[180px]" alt="logo"/>
                        </Link>
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
                                            <div className="grid grid-cols-3 text-base gap-y-5 px-6 py-9">   
                                                {
                                                    data.links?.map((link, index) => (
                                                        <Link className="hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-2 hover:underline" key={index} href={link.href}>{link.name}</Link>
                                                    ))
                                                }
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                            ))
                        }
                        <Link href="/caseStudies" className="flex space-x-2 items-center hover:border-b-2 hover:border-blue-600 hover:text-blue-600">
                            <span>Case Studies</span>
                        </Link>
                        <Link href="/" className="flex space-x-2 items-center hover:border-b-2 hover:border-blue-600 hover:text-blue-600">
                            <span>Contact</span>
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