import React, { ReactNode, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { getStaffList } from "../store/actions/staffActions";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import SearchFilter from "../components/Buttons/SearchFilter";
import RectangleButton from "../components/Buttons/RetangleButton";
import { Plus } from "../components/layout/Icons";
import UserModal from "../components/modal/UserModal";

interface User {
  name: string;
  title: string;
  company: string;
  group: string;
  role: string;
  email: string;
  business_phone: string;
  cell_phone: string;
}

export default function UserManagement() {
  const dispatch = useDispatch<AppDispatch>();
  const { staffList, loading, error } = useSelector(
    (state: RootState) => state.staff
  );
  const [selectedStaff, setSelectedStaff] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getStaffList());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const addNewStaff = () => {
    setSelectedStaff(null);
    handleOpenModal();
  };
  return (
    <>
      <div
        className="content bg-[#FDFCF6] p-[16px]"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="bg-white rounded-[8px] border-2 border-[#eaecf0] pb-[16px]">
          <div className="flex p-4 justify-between">
            <h1 className="text-black text-[24px] leading-[36px] font-semibold">
              User Management
            </h1>
            <RectangleButton
              icon={<Plus color="" />}
              name="New Staff"
              className="flex bg-[#009345] text-white"
              onClick={addNewStaff}
            />
          </div>
          <div className="px-4 pb-[16px]">
            <h4 className="text-[#667085] text-[14px] leading-[20px] font-normal">
              Nulla scelerisque sollicitudin urna vel tempor.
            </h4>
          </div>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <SearchFilter
                data={staffList}
                onRowSelect={setSelectedStaff}
                handleOpenModal={handleOpenModal}
              />
            )}
          </div>
        </div>
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        staff={selectedStaff}
      />
    </>
  );
}

UserManagement.getLayout = (page: ReactNode) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="main-content flex-1">
        <Navbar tab="User Management" />
        {page}
      </div>
    </div>
  );
};
