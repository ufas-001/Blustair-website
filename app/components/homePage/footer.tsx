import React from "react";
import { Facebook, Twitter, Linkedin, Youtube, Wifi, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../../components/img/blustair_+_icon-removebg-preview.png"
import Link from "next/link";


const Footer = () => {


    return (
        <div className="w-[90%] mx-auto py-16 tracking-[1.5px]">
            {/* <h4 className="text-5xl font-[400]">
                Blustair <br /> &nbsp; & Consult
            </h4> */}
            <Image src={Logo} className="w-[200px]" alt="logo"/>
            <div className="flex flex-col gap-y-10 md:flex-row justify-between mt-10 md:mt-14">
                <div className="w-full md:w-1/2">
                    <h4 className="text-lg font-[600] mb-2">Subscribe</h4>
                    <p className="text-sm font-[50]">Select topics and stay current with our latest insights</p>
                    <div className="pt-4 flex items-center space-x-3">
                        <input type="email" name="email" placeholder="Email address" className="placeholder:text-gray-600 placeholder:font-[600] text-sm w-[245px] p-3 border-[1px] border-black"  />
                        <button className="text-white bg-blue-400 py-3 px-6 text-[12px] font-[600]">Submit</button>
                    </div>
                </div>
                <div className="w-full md:w-2/5">
                    <div className="flex items-center flex-wrap md:justify-end gap-y-4 gap-x-6 mb-3">
                        <Link href="" className="text-[14px] font-[900] ">
                            Contact us
                        </Link>
                        <Link href="" className="text-[14px] font-[900] ">
                            FAQ
                        </Link>
                        <Link href="" className="text-[14px] font-[900] ">
                            Cookie preferences
                        </Link>
                        <Link href="" className="text-[14px] font-[900] ">
                            Terms of use
                        </Link>
                        <Link href="" className="text-[14px] font-[900]">Local language information</Link>
                        <Link href="" className="text-[14px] font-[900]">Accessibility statement</Link>
                    </div>
                    
                    <div className="flex md:justify-end space-x-5">
                        <Link href="" className="relative border-[1px] block w-8 h-8 bg-black rounded-full hover:bg-blue-600">
                            <Youtube width="16" className="absolute top-[3px] text-white left-[8px]" />
                        </Link>
                        <Link href="" className="relative border-[1px] block w-8 h-8 bg-black rounded-full hover:bg-blue-600">
                            <Facebook width="16" className="absolute top-[3px] text-white left-[7px]" />
                        </Link>
                        <Link href="" className="relative border-[1px] block w-8 h-8 bg-black rounded-full hover:bg-blue-600">
                            <Twitter width="16" className="absolute top-[3px] text-white left-[7px]" />
                        </Link>
                        <Link href="" className="relative border-[1px] block w-8 h-8 bg-black rounded-full hover:bg-blue-600">
                            <Linkedin width="16" className="absolute top-[3px] text-white left-[7px]" />
                        </Link>
                        <Link href="" className="relative border-[1px] block w-8 h-8 bg-black rounded-full hover:bg-blue-600">
                            <Wifi width="16" className="absolute top-[3px] text-white left-[7px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer