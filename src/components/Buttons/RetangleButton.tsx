import React from "react";

interface RectangleBttonProps {
    icon: JSX.Element;
    name: string;
    className?: string;
    onClick?: () => void;
}

const RectangleButton : React.FC<RectangleBttonProps> = ( {icon, name, className, onClick} ) => {
    return(
        <button className={`"flex rounded-[8px] border border-red-[#D8DCE5] px-3 py-2 ${className}`}
                 onClick={onClick}
        >
            {icon}
            {name}
        </button>
    );
}

export default RectangleButton;
