import React from "react";

interface CircleBttonProps {
    icon: JSX.Element;
    iconColor: string;
    className?: string;
}

const CircleButton : React.FC<CircleBttonProps> = ( {icon, iconColor, className} ) => {
    return(
        <div className={`border border-red-[#D8DCE5] p-3 ${className}`}>
            {icon}
        </div>
    );
}

export default CircleButton;
