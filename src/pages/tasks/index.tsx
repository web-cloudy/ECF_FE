import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import TasksContent from "@/components/tasks/TasksContent";
import { ReactNode } from "react";

export default function Tasks() {
  return (
    <div>
      <div className="bg-pink-50 p-4">
        <div className="bg-white border-[1px] border-gray-200 rounded-lg p-4">
          <TasksContent />
        </div>
      </div>
    </div>
  );
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
