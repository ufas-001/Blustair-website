import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Companies", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Mobilemenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <Dialog as="div" className="xl:hidden" open={open} onClose={onClose}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0  z-50 w-full overflow-y-auto bg-slate-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => onClose()}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6 text-black" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-white">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black active:text-blue-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Mobilemenu;
