import React, { useState } from "react";
import Image from 'next/image';
import { DropDown } from "../layout/Icons";

interface MenuProfileProps {
  name: string;
  image: string;
  role: string;
}

const MenuProfile: React.FC<MenuProfileProps> = ({ image, name, role }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center rounded-l-full rounded-r-full gap-2 cursor-pointer bg-[#FAF5E6]"
        onClick={toggleDropdown}
      >
        <div>
          <Image
            src={image}
            alt={`${name}'s profile`}
            className="rounded-full"
            width={40}
            height={40}
          />
        </div>
        <div>
          <div className="font-lato text-[12px] font-bold leading-[18px] text-[#344054]">
            {name}
          </div>
          <div className="font-lato text-[10px] leading-[15px] text-[#344054]">
            {role}
          </div>
        </div>
        {/* Custom SVG Icon */}
        <div className="ml-2 pr-3">
          <DropDown color="" />
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li className="text-[#475467] text-[14px] px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </li>
            <li className="text-[#475467] text-[14px] px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
            <li className="text-[#475467] text-[14px] px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuProfile;
