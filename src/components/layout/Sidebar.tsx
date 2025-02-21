import React, { useState } from "react";
import { useRouter } from "next/router";
import SidebarItem from "./SidebarItem";
import Phone from "../usermanagement/Phone";
import Image from "next/image";
import {
  HomeIcon,
  TaskIcon,
  LeadIcon,
  LoanIcon,
  PricingIcon,
  MarketingIcon,
  ReportIcon,
  UserIcon,
  HelpCenter,
  LogOut,
} from "./Icons";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(-1);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const siderbarItems = [
    {
      icon: <HomeIcon color="#A8B0B9" />,
      title: "Home",
      iconColor: "006838",
      path: "/home",
    },
    {
      icon: <TaskIcon color="#A8B0B9" />,
      title: "Tasks",
      iconColor: "006838",
      path: "/tasks",
    },
    {
      icon: <LeadIcon color="#A8B0B9" />,
      title: "Leads",
      iconColor: "006838",
      path: "/leads",
    },
    {
      icon: <LoanIcon color="#A8B0B9" />,
      title: "Loan",
      iconColor: "006838",
      path: "/loan",
    },
    {
      icon: <PricingIcon color="#A8B0B9" />,
      title: "Pricing",
      iconColor: "006838",
      children: [
        {
          title: "Quotes",
          path: "/pricing/quotes",
        },
        {
          title: "Guidlines",
          path: "/pricing/guidlines",
        },
      ],
    },
    {
      icon: <MarketingIcon color="#A8B0B9" />,
      title: "Marketing",
      iconColor: "006838",
      path: "/marketing",
    },
    {
      icon: <ReportIcon color="#A8B0B9" />,
      title: "Reports",
      iconColor: "006838",
      path: "/reports",
    },
    {
      icon: <UserIcon color="#A8B0B9" />,
      title: "User Management",
      iconColor: "006838",
      path: "/user-management",
    },
  ];

  const handleSubmenuToggle = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <div className="sidebar h-screen border-r-2 border-[#eaecf0] flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex-1">
        {/* logo */}
        <div className="p-[24px] pb-[28px]" style={{ marginBottom: "10px" }}>
          <Image
            src="/images/logo.svg"
            alt="Express Capital Financing Logo"
            className="h-12"
            width={212}
            height={53}
            priority
          />
        </div>
        {/* menu-group */}
        <nav>
          <ul className="flex flex-col space-y-2">
            {siderbarItems.map((item, index) => (
              <div key={index}>
                <SidebarItem
                  icon={item.icon}
                  title={item.title}
                  isActive={activeButton === index}
                  onClick={() => {
                    setActiveButton(index);
                    if (item.children) {
                      handleSubmenuToggle(index);
                    } else {
                      router.push(item.path);
                    }
                  }}
                />
                {/* Render Submenu */}
                {item.children && activeSubmenu === index && (
                  <div className="pl-8 mt-2 space-y-1">
                    {item.children.map((child, childIndex) => (
                      <SidebarItem
                        key={childIndex}
                        title={child.title}
                        onClick={() => router.push(child.path)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>
      {/* Bottom Section */}
      <div className="mt-auto pb-0">
        {/* Phone Component */}
        <Phone />
        {/* Bottom Navigation */}
        <nav>
          <ul className="flex flex-col space-y-2">
            <SidebarItem
              icon={<HelpCenter color="#A8B0B9" />}
              title="FAQ & Help Center"
            />
            <SidebarItem icon={<LogOut color="#A8B0B9" />} title="Log Out" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
