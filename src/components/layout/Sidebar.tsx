import React from 'react';
import SidebarItem from './SidebarItem';
import { HomeIcon, TaskIcon, LeadIcon, LoanIcon, PricingIcon, MarketingIcon, ReportIcon, UserIcon, HelpCenter, LogOut } from './Icons';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar bg-gray-100 h-screen border-r-2 border-[#eaecf0]">
      <div className='p-4'>
        <img src="/images/logo.svg" alt="Express Capital Financing Logo" className="h-12" />
      </div>
      <div className='flex flex-col h-[calc(100vh-200px)] justify-between '>
        <nav className='pt-[34px]'>
          <ul className='flex flex-col space-y-2'>
            <SidebarItem 
              icon={<HomeIcon color="#A8B0B9" />}  
              name="Home"
              iconColor="#006838" 
            />
            <SidebarItem 
              icon={<TaskIcon color="#A8B0B9" />} 
              name="Tasks" 
              iconColor="#006838" 
            />
            <SidebarItem 
              icon={<LeadIcon color="#A8B0B9" />} 
              name="Leads" 
              iconColor="#006838" 
            />
            <SidebarItem 
              icon={<LoanIcon color="#A8B0B9" />} 
              name="Loan" 
              iconColor="#006838" 
            />
            <SidebarItem 
              icon={<PricingIcon color="#A8B0B9" />} 
              name="Pricing" 
              iconColor="#006838" 
            />
            <SidebarItem 
              icon={<MarketingIcon color="#A8B0B9" />} 
              name="Marketing" 
              iconColor="#006838" 
            />
            <SidebarItem 
              icon={<ReportIcon color="#A8B0B9" />} 
              name="Reports" 
              iconColor="#006838" 
            />
            <SidebarItem 
              icon={<UserIcon color="#A8B0B9" />} 
              name="User Management" 
              iconColor="#006838" 
            />
          </ul>
        </nav>
    
        <nav className='pt-[34px]'>
          <ul className='flex flex-col space-y-2'>
            <SidebarItem 
              icon={<HelpCenter color="#A8B0B9" />}  
              name="FAQ & Help Center"
              iconColor="#006838" 
            />
            <SidebarItem 
              icon={<LogOut color="#A8B0B9" />} 
              name="Log Out" 
              iconColor="#006838" 
            />
          </ul>
        </nav>
      </div>
    
    </div>
  );
};

export default Sidebar;
