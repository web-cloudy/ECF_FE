import React, { useState } from 'react';
import { Search } from '../layout/Icons';
import RectangleButton from './RetangleButton';
import CircleButton from './CircleButton';
import { Setting } from '../layout/Icons';
import { Filter } from '../layout/Icons';
import { Vertical } from '../layout/Icons';
import { Menu } from '../layout/Icons';

// Define User interface for TypeScript
interface User {
    name: string;
    title: string;
    company: string;
    group: string;
    role: string;
    email: string;
    businessPhone: string;
    cellPhone: string;
}

interface SearchTableProps {
    data: User[];
}

const SearchTable: React.FC<SearchTableProps> = ({ data }) => {
    const [query, setQuery] = useState(''); 
    const [filteredData, setFilteredData] = useState<User[]>(data);
    const [selectedRow, setSelectedRow ] = useState<number | null>(null);
    const [checkBoxRows, setCheckedRows] = useState<Set<number>>(new Set());


    // Handle search input change
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        const filtered = data.filter((user) =>
            Object.values(user).some((value) =>
                value.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setFilteredData(filtered); 
    };

    const handleRowClick = (index: number) => {
        const isAlreadyChecked = checkBoxRows.has(index);
     
        setSelectedRow(index === selectedRow ? null : index);
        if (isAlreadyChecked) {
            handleCheckboxChange(index); 
        } else {
            handleCheckboxChange(index);
        }
    }

    const handleCheckboxChange = (index: number) => {

        setCheckedRows((prev) => {
            const newCheckedRows = new Set(prev);
            if (newCheckedRows.has(index)) {
                newCheckedRows.delete(index); 
            } else {
                newCheckedRows.add(index); 
            }
            return newCheckedRows;
        });
    };

    return (
        <div className="search-table-container">
            <div className='flex'>
                <div className="relative mb-4 px-4 w-full">
                    {/* Search input with icon */}
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search for something"
                        className="p-2 border rounded-md w-full pl-10 text-[#667085] text-[14px] leading-[24px]"
                        style={{ paddingLeft: '30px' }} // Extra space for the icon
                    />
                    {/* Search icon */}
                    <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500">
                        {<Search color="" />}
                    </span>
                </div>
                <div className='flex gap-[8px] pr-[16px]'>
                    <div>
                        <RectangleButton
                            icon={<Filter color="" />}
                            name="Filters"
                            className="flex gap-2 text-[#667085] "
                        />
                    </div>
                    <div className='flex pb-[16px]'>
                            <CircleButton
                                icon={<Vertical color="#A8B0B9" />}
                                iconColor="#006838"
                                className="rounded-l-[8px]"
                            />
                            <CircleButton
                                icon={<Menu color="#A8B0B9" />}
                                iconColor="#006838"
                                className="rounded-r-[8px]"
                            />
                    </div>
                    <div>
                        <CircleButton
                            icon={<Setting color="#A8B0B9" />}
                            iconColor="#006838"
                            className="rounded-[8px]"
                        />
                    </div>
                </div>
            </div>
            {/* Table */}
            <table className="table-auto w-full">
                <thead>
                    <tr className='bg-[#D5B034]'>
                        <th className="p-2 text-[12px] font-lato leading-[18px]"><input type="checkbox" /></th>
                        <th className="p-2 text-[12px] font-lato leading-[18px]">Name</th>
                        <th className="p-2 text-[12px] font-lato leading-[18px]">Title</th>
                        <th className="p-2 text-[12px] font-lato leading-[18px]">Company</th>
                        <th className="p-2 text-[12px] font-lato leading-[18px]">Group</th>
                        <th className="p-2 text-[12px] font-lato leading-[18px]">Role</th>
                        <th className="p-2 text-[12px] font-lato leading-[18px]">Email</th>
                        <th className="p-2 text-[12px] font-lato leading-[18px]">Business Phone</th>
                        <th className="p-2 text-[12px] font-lato leading-[18px]">Cell Phone</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {filteredData.length > 0 ? (
                        filteredData.map((user, index) => (
                            <tr
                                key={index}
                                onClick={() => handleRowClick(index)}
                                className={`${
                                    index % 2 === 0 ? 'bg-white' : 'bg-[#EAECF0]'
                                } ${selectedRow === index ? 'bg-[#FFFAEC]' : ''}`} 
                            >
                                <td className="p-2 justify-center">
                                    <input 
                                    type="checkbox" 
                                    checked={checkBoxRows.has(index)}
                                    onChange={() => handleCheckboxChange(index)}
                                    />
                                </td>
                                <td className="p-2 text-[#353B44] text-[14px] font-lato font-normal leading-[20px]">{user.name}</td>
                                <td className="p-2 text-[#353B44] text-[14px] font-lato font-normal leading-[20px]">{user.title}</td>
                                <td className="p-2 text-[#353B44] text-[14px] font-lato font-normal leading-[20px]">{user.company}</td>
                                <td className="p-2 text-[#353B44] text-[14px] font-lato font-normal leading-[20px]">{user.group}</td>
                                <td className="p-2 text-[#353B44] text-[14px] font-lato font-normal leading-[20px]">{user.role}</td>
                                <td className="p-2 text-[#353B44] text-[14px] font-lato font-normal leading-[20px]">{user.email}</td>
                                <td className="p-2 text-[#353B44] text-[14px] font-lato font-normal leading-[20px]">{user.businessPhone}</td>
                                <td className="p-2 text-[#353B44] text-[14px] font-lato font-normal leading-[20px]">{user.cellPhone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={9} className="p-2 text-center">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SearchTable;