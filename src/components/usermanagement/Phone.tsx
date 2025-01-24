import React from 'react';
import CircleButton from '../Buttons/CircleButton';
import Image from 'next/image';
import { PhoneCalling, PhoneOff } from '../layout/Icons';

const Phone: React.FC = () => {
  return (
    <div className="p-[16px]">
      <div
        style={{
          borderRadius: "4px",
          backgroundColor: "#F0F2F5",
          padding: "12px 16px 14px"
        }}
      >
        {/* Header */}
        <div style={{ margin: "auto", textAlign: "left" }}>
          Incoming Call
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row  mt-4 space-x-4">
          {/* Avatar */}
          <div className='flex justify-center lg:flex'>
            <Image
              src="/images/User/Avatar.png" // Image path
              alt="Avatar"
              width={32} // Avatar width
              height={32} // Avatar height
              className="rounded-full w-8 h-8" // Optional: To make the image circular
              priority
            />
          </div>
          {/* Contact Information */}
          <div className="gap-[8]">
            <p className="text-[#4F5B67] font-medium">Susan Hazah</p>
            <p className="text-[#667085] text-sm">(+1) 566-333-4745</p>
            <div className="flex items-center space-x-2">
              <CircleButton
                icon={<PhoneCalling color="white" />}  // Set the icon color to white
                iconColor=""             // Optional: You can keep the icon color as white here for clarity
                className="bg-[#1BBF00] text-white flex items-center justify-center rounded-l-full rounded-r-full p-1 px-4 h-[28] w-[99]" // Green background, white text
              />
              <CircleButton
                icon={<PhoneOff color="white" />}  // Set the icon color to white
                iconColor=""             // Optional: You can keep the icon color as white here for clarity
                className="bg-[#FB0000] text-white flex items-center justify-center rounded-full !p-0 h-[28px] w-[28px]" // Green background, white text
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
