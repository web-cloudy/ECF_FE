import React, { useState } from "react";

import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import UserTable from '../components/usermanagement/UseerTable';
import SearchFilter from '../components/Buttons/SearchFilter';
import RectangleButton from "../components/Buttons/RetangleButton";
import { Plus } from '../components/layout/Icons';
import UserModal from '../components/modal/UserModal';

const Dashboard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const data = [
        {
            name: 'John Doe',
            title: 'Software Engineer',
            company: 'Tech Co.',
            group: 'Engineering',
            role: 'Developer',
            email: 'john@example.com',
            businessPhone: '123-456-7890',
            cellPhone: '987-654-3210',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        {
            name: 'Jane Smith',
            title: 'Project Manager',
            company: 'Business Inc.',
            group: 'Management',
            role: 'Manager',
            email: 'jane@example.com',
            businessPhone: '555-123-4567',
            cellPhone: '555-765-4321',
        },
        // Add more users here...
    ];

    return (
        <div className="flex h-full">
            <Sidebar />
            <div className="main-content flex-1">
                <Navbar />
                <div className="content bg-[#FDFCF6] p-[16px]" style={{ height: 'calc(100vh - 60px)' }}>
                    <div className="bg-white rounded-[8px] border-2 border-[#eaecf0] pb-[16px]">
                        <div className="flex p-4 justify-between">
                            <h1 className="text-black text-[24px] leading-[36px] font-semibold">User Management</h1>
                            <RectangleButton
                                icon={<Plus color="" />}
                                name="New Staff"
                                className="flex bg-[#009345]"
                                onClick={handleOpenModal}
                            />
                        </div>
                        <div className="px-4 pb-[16px]">
                            <h4 className="text-[#667085] text-[14px] leading-[20px] font-normal">Nulla scelerisque sollicitudin urna vel tempor.</h4>
                        </div>
                        <div>
                            <SearchFilter data={data} />

                        </div>
                    </div>
                </div>
            </div>
            {<UserModal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2 className="text-[#121212] text-[24px] leading-[32px] font-bold mb-4">Add New Staff</h2>
                <div className="flex gap-[8px] mb-[16px]">
                    <div>
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Name
                            </label>
                        </div>
                        <div>
                            <input type="text" className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px]" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Title
                            </label>
                        </div>
                        <div>
                            <select className="text-[#344054] text-[14px] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[8px] mb-[16px]">
                    <div className="w-full">
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Company
                            </label>
                        </div>
                        <div>
                            <select className="text-[#344054] text-[14px] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full">
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Group
                            </label>
                        </div>
                        <div>
                            <select className="text-[#344054] text-[14px] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[8px] mb-[16px]">
                    <div className="w-full">
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Role
                            </label>
                        </div>
                        <div>
                            <select className="text-[#344054] text-[14px] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Email
                            </label>
                        </div>
                        <div>
                            <input type="email" className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px]" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-[8px] mb-[16px]">
                    <div>
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Business Phone
                            </label>
                        </div>
                        <div>
                            <input type="text" className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px]" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Cell Phone
                            </label>
                        </div>
                        <div>
                            <input type="text" className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px]" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-[8px] mb-[16px]">
                    <div className="w-full">
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Account Right
                            </label>
                        </div>
                        <div>
                            <select className="text-[#344054] text-[14px] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full">
                        <div>
                            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                                Active
                            </label>
                        </div>
                        <div>
                            <select className="text-[#344054] text-[14px] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="w-full">

                    <div>
                        <label className="font-lato text-[#344054] text-[14px] leading-[20px]">
                            Note
                        </label>
                    </div>
                    <div className="w-full">
                        <textarea  className="w-full text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px]" 
                                   rows="6"
                        />
                    </div>
                </div>
            </UserModal>}
        </div>
    );
}

export default Dashboard;