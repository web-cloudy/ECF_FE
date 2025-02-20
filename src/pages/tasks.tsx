import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export default function Tasks() {
  return <>This page will be implemented soon.</>;
}

Tasks.getLayout = (page: ReactNode) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="main-content flex-1">
        <Navbar tab="Tasks" />
        {page}
      </div>
    </div>
  );
};
