import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
      <p className="hidden md:inline cursor-pointer">Become a host</p>
      <GlobeAltIcon className="h-6 cursor-pointer text-[#4F719E]" />
      <div className="flex space-x-2 p-2 md:border-2 shadow-sm rounded-full">
        <MenuIcon className="h-6 text-[#4F719E]" />
        <UserCircleIcon className="h-6 text-[#4F719E]" />
      </div>
    </div>
  );
};

export default Navbar;
