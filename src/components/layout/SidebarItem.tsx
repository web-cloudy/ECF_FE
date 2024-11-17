import React from "react";

interface SidebarItemProps {
    icon: JSX.Element;
    name: string;
    iconColor: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, name, iconColor }) => {
    return (
        <li className="flex items-center space-x-4 pl-[28px] py-[12px] hover:bg-[#F5FBEA] hover:text-[#006838] cursor-pointer group">
            <span className="icon flex justify-center items-center" style={{ width: "20px", height: "20px" }}>
                {icon}
            </span>
            <span className="font-lato font-medium text-[14px] leading-[16px] text-[#4F5B67] group-hover:text-[#006838]">
                {name}
            </span>
        </li>
    );
};

export default SidebarItem;
