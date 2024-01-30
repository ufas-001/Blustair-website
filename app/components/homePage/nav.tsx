import React from "react";
import Link from "next/link";

const NavSection = () => {
    return (
        <div className="w-full overflow-x-scroll xl:overflow-hidden">
        <div className="my-5 px-5 lg:w-[88%]  mx-auto flex space-x-2">
            <h2 className="font-[700]">
                TRENDING <br />
                INSIGHTS
            </h2>
            <div className="flex flex-row">
                <div className="flex w-[250px] pr-5 space-x-2">
                    <span className="text-3xl font-bold text-blue-600">1</span>
                    <div className="border-l-[1px] border-blue-600">{""}</div>
                    <Link href="" className="text-sm  font-[300] hover:text-blue-600">The McKinsey guide to excelling as a CEO</Link>
                </div>
                <div className="flex w-[250px] pr-5 space-x-2">
                    <span className="text-3xl font-bold text-blue-600">2</span>
                    <div className="border-l-[1px] border-blue-600">{""}</div>
                    <Link href="" className="text-sm  font-[300] hover:text-blue-600">The economic potential of generative AI: The next productivity frontier</Link>
                </div>
                <div className="flex w-[250px] pr-5 space-x-2">
                    <span className="text-3xl font-bold text-blue-600">3</span>
                    <div className="border-l-[1px] border-blue-600">{""}</div>
                    <Link href="" className="text-sm font-[300] hover:text-blue-600">The State of Fashion 2024: Finding pockets of growth as uncertainty reigns</Link>
                </div>
                <div className="flex w-[250px] pr-5 space-x-2">
                    <span className="text-3xl font-bold text-blue-600">4</span>
                    <div className="border-l-[1px] border-blue-600">{""}</div>
                    <Link href="" className="text-sm  font-[300] hover:text-blue-600">Why do organizations have COOs?</Link>
                </div>
            </div>
        </div>
        </div>
    )
}


export default NavSection