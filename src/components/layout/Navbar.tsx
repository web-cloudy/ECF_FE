import React from "react";
import { Email, Notify, Setting } from "./Icons";
import CircleButton from "../Buttons/CircleButton";
import MenuProfile from "../profile/MenuProfile";

interface NavbarProps {
  tab: string;
}

const Navbar: React.FC<NavbarProps> = ({ tab }) => {
  return (
    <div className="navbar flex justify-between items-center pl-6 p-2">
      <div className="flex">
        <span className="text-[#9B9EA3]">{`Home / ${tab}`}</span>
      </div>
      <div className="user-info flex items-center gap-3">
        <CircleButton
          icon={<Email color="#A8B0B9" />}
          iconColor="#006838"
          className="rounded-full"
        />
        <CircleButton
          icon={<Notify color="#A8B0B9" />}
          iconColor="#006838"
          className="rounded-full"
        />
        <CircleButton
          icon={<Setting color="#A8B0B9" />}
          iconColor="#006838"
          className="rounded-full"
        />

        <MenuProfile
          name="Sarah Benson"
          image="/images/User/Avatar.png"
          role="Loan Officer"
        />
      </div>
    </div>
  );
};

export default Navbar;
