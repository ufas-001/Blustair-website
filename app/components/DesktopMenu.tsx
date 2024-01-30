import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../components/img/blustair_+_icon-removebg-preview.png"
import { Dialog } from "@headlessui/react";
import { X, Search, ChevronRight } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface DesktopMenuProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Companies", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const DesktopMenu: React.FC<DesktopMenuProps> = ({ open, onClose }) => {
  return (
    <Dialog as="div" className="hidden xl:block" open={open} onClose={onClose}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0  z-50 w-full  overflow-y-auto ">
        <div className="flex">
          <div className="w-[25%] bg-slate-50 pt-2" >
            <div className="flex space-x-6 pl-6 items-center h-[80px] border-b-[1px] border-gray-300">
              <div className="flex items-center justify-between ">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-black"
                  onClick={() => onClose()}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* <div className="text-white flex flex-col font-[400] text-xl">
                  Blustair <br /> &nbsp; & Consult
              </div> */}
              <Image src={Logo} className="w-[180px]" alt="logo"/>
            </div>
          </div>
          <div className="pt-2 bg-white w-[75%] ">
            <div className="h-[80px] relative">
              <input
                type="text"
                className="w-full h-full pb-1 pl-12 outline-none placeholder-gray-400 focus:shadow-lg"
                placeholder="Search"
              />
              <Search size={20} className="absolute top-7 right-16 font-[50]" />
            </div>
          </div>
        </div>
        <div className="">
          <Tabs defaultValue="industries" className="w-full  flex flex-row">
              <TabsList className="flex bg-slate-50 flex-col gap-y-10 w-[25%] h-[600px] px-6 pt-16 text-black">
                <TabsTrigger value="industries" className="flex justify-between items-center active:text-white text-lg  font-[500]">
                  <span>Industries</span>
                  <ChevronRight />
                </TabsTrigger>
                <TabsTrigger value="capacities" className="flex justify-between items-center active:text-white text-lg  font-[500]">
                  <span>Capacities</span>
                  <ChevronRight />
                </TabsTrigger>
                <TabsTrigger value="features" className="flex justify-between items-center active:text-white text-lg  font-[500]">
                  <span>Features</span>
                  <ChevronRight />
                </TabsTrigger>
                <TabsTrigger value="about" className="flex justify-between items-center active:text-white text-lg  font-[500]">
                  <span>About Us</span>
                  <ChevronRight />
                </TabsTrigger>
                <TabsTrigger value="careers" className="flex justify-between items-center active:text-white text-lg  font-[500]">
                  <span>Careers</span>
                  <ChevronRight />
                </TabsTrigger>
                <Link href="/" className="flex justify-between items-center active:text-white text-lg  font-[500]">
                  Sign Out
                </Link>
              </TabsList>
            <TabsContent value="industries" className="w-[75%] bg-gray-100">
              <div className="px-16 py-16 ">
                <h4 className="text-2xl left-9 font-bold ">Industries</h4>
                <hr className="my-5 bg-gray-300 h-[2px]"/>
                <div className="grid grid-cols-3 text-base font-[50] gap-4 ">
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Aerospace & Defense
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="capacities" className="w-[75%] bg-gray-100">
              <div className="px-16 py-16 ">
                <h4 className="text-2xl left-9 font-bold ">Industries</h4>
                <hr className="my-5 bg-gray-300 h-[2px]"/>
                <div className="grid grid-cols-3 text-base font-[50] gap-4 ">
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Aerospace & Defense
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="w-[75%] bg-gray-100">
              <div className="px-16 py-16 ">
                <h4 className="text-2xl left-9 font-bold ">Features</h4>
                <hr className="my-5 bg-gray-300 h-[2px]"/>
                <div className="grid grid-cols-3 text-base font-[50] gap-4 ">
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Aerospace & Defense
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-[75%] bg-gray-100">
              <div className="px-16 py-16 ">
                <h4 className="text-2xl left-9 font-bold ">About Us</h4>
                <hr className="my-5 bg-gray-300 h-[2px]"/>
                <div className="grid grid-cols-3 text-base font-[50] gap-4 ">
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Aerospace & Defense
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="careers" className="w-[75%] bg-gray-100">
            <div className="px-16 py-16 ">
                <h4 className="text-2xl left-9 font-bold ">Careers</h4>
                <hr className="my-5 bg-gray-300 h-[2px]"/>
                <div className="grid grid-cols-3 text-base font-[50] gap-4 ">
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Aerospace & Defense
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Automotive & Assembly
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Chemicals
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                  <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-blue-600">
                    Consumer Packaged Goods
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
      </Dialog.Panel>
    </Dialog>
  );
};

export default DesktopMenu;
