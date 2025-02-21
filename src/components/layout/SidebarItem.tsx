import React from "react";
interface SidebarItemProps {
  icon?: JSX.Element | null;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  isActive,
  onClick,
}) => {
  return (
    <li
      onClick={onClick} // Notify parent when clicked
      className="relative flex items-center space-x-4 pl-[28px] py-[12px] hover:bg-[#F5FBEA] hover:text-[#006838] cursor-pointer group"
    >
      <span
        className="icon flex justify-center items-center"
        style={{ width: "20px", height: "20px" }}
      >
        {icon}
      </span>
      <span className="font-lato font-medium text-[14px] leading-[16px] text-[#4F5B67] group-hover:text-[#006838]">
        {title}
      </span>
      <span
        className={`absolute right-[1px] top-0 h-full w-[3px] ${
          isActive ? "bg-[#009345]" : "bg-transparent"
        }`}
      />
    </li>
  );
};

export default SidebarItem;
