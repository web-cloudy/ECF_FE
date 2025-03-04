import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import OneCard from "./OneCard";

interface Task {
  id: number;
  priority: string;
  company: string;
  phone: string;
  email: string;
  description: string;
  date: string;
}

const ignoreTasks: Task[] = [
  {
    id: 45128,
    priority: "High Priority",
    company: "Vonge LLC",
    phone: "(+92) 376 999",
    email: "john@gmail.com",
    description: "Change from Lead to Borrower",
    date: "Apr 04th 2024",
  },
  {
    id: 45128,
    priority: "High Priority",
    company: "Vonge LLC",
    phone: "(+92) 376 999",
    email: "john@gmail.com",
    description: "Change from Lead to Borrower",
    date: "Apr 04th 2024",
  },
];

const IgnoreCards: React.FC = () => {
  return (
    <div>
      <div className="flex pb-4">
        <div className="bg-red-100 pl-6 py-1 rounded-l-3xl">Ignore</div>
        <span className=" text-red-500 bg-red-100 py-1 px-6 rounded-r-3xl">
          2
        </span>
      </div>
      {ignoreTasks.map((task, index) => (
        <OneCard
          key={index}
          id={task.id}
          priority={task.priority}
          company={task.company}
          phone={task.phone}
          email={task.email}
          description={task.description}
          date={task.date}
        />
      ))}
    </div>
  );
};

export default IgnoreCards;
