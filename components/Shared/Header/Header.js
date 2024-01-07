import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";

const Header = () => {
    return (
      <div className="w-full lg:w-[800px] xl:w-[1068px] mx-auto flex justify-between items-center my-9 px-5 lg:px-0">
        <h1 className="text-2xl font-bold font-mono">pti.</h1>
        <div className="flex gap-2">
          <div className="bg-white rounded-[8px] md:rounded-[10px] w-[191px] xl:w-[576px] h-[44px] flex justify-start items-center gap-2 pl-5 pr-2">
            <FaMagnifyingGlass className="text-orange-300" />
            <h1 className="text-gray-300">Search Audiobook</h1>
          </div>
          <div className="bg-white rounded-[8px] md:rounded-[10px] w-[103px] md:w-[167px] h-[48px] flex justify-between items-center pl-5 pr-2">
            <h1 className="text-gray-700 font-bold">MENU</h1>
            <IoIosArrowDown className="text-orange-300 w-14" />
          </div>
        </div>
        <div className="w-[44px] h-[44px] hidden bg-orange-500 rounded-full text-white text-2xl font-semibold md:flex justify-center items-center">
          <GoPerson />
        </div>
      </div>
    );
};

export default Header;