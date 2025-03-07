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
      className={`relative flex items-center space-x-4 pl-[28px] py-[12px] cursor-pointer group rounded-md ${
        isActive ? "bg-[#009345]" : "bg-transparent hover:bg-[#F5FBEA]"
      }`}
    >
      <span
        className="icon flex justify-center items-center"
        style={{ width: "20px", height: "20px" }}
      >
        {icon}
      </span>
      <span
        className={`font-lato font-medium text-[14px] leading-[16px] ${
          isActive ? "text-white" : "text-[#4F5B67] group-hover:text-[#006838]"
        }`}
      >
        {title}
      </span>
    </li>
  );
};

export default SidebarItem;
