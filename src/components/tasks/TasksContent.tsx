import React, { useState } from "react";
import { AddTwoTone } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FlipToBackOutlinedIcon from "@mui/icons-material/FlipToBackOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ListStyle from "./ListStyle";
import CardStyle from "./CardStyle";

const TasksContent: React.FC = () => {
  const [state, setState] = useState(true);

  const handleChange = () => {
    setState(!state);
  };

  const [showStyle, setShowStyle] = useState(true);

  const handleCardChange = () => {
    setShowStyle(false);
  };

  const handleListChange = () => {
    setShowStyle(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-3xl">
          Today
          <IconButton onClick={handleChange}>
            {state ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton>
        </div>
        <button className="flex items-center bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-md">
          <AddTwoTone sx={{ fontSize: "32px", pr: "8px" }} />
          <div style={{ fontSize: "16px" }}>New Task</div>
        </button>
      </div>
      {state ? (
        <div className="text-gray-400 pb-4">
          Nulla Scelerisque sollicitudin urna vel tempor.
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex justify-between pt-1">
        <div className="flex items-center">
          <div className="bg-pink-100  text-gray-500 border border-gray-300 rounded-l-lg px-4 py-2">
            All
          </div>
          <div className=" text-gray-500 border border-gray-300 px-4 py-2">
            To Do
            <span className="bg-blue-100 text-blue-500 ml-2 px-2 py-1 rounded-[50%]">
              2
            </span>
          </div>
          <div className=" text-gray-500 border border-gray-300 px-4 py-2">
            In Progress
            <span className="bg-yellow-100 text-yellow-500 ml-2 px-2 py-1 rounded-[50%]">
              1
            </span>
          </div>
          <div className=" text-gray-500 border border-gray-300 px-4 py-2">
            Completed
            <span className="bg-green-100 text-green-500 ml-2 px-2 py-1 rounded-[50%]">
              3
            </span>
          </div>
          <div className=" text-gray-500 border border-gray-300 px-4 py-2 rounded-r-lg">
            Ignore
            <span className="bg-red-100 text-red-500 ml-2 px-2 py-1 rounded-[50%]">
              2
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <div
            style={{
              border: "1px lightgray solid",
              borderRadius: "8px",
            }}
          >
            <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search for something..."
              inputProps={{ "aria-label": "search for something" }}
            />
          </div>
          <button className="text-gray-500 border border-gray-300 rounded-lg px-4">
            <FilterAltOutlinedIcon sx={{ mr: "8px" }} />
            Filters
          </button>
          <div className="flex ">
            <button
              className="px-2 border-r hover:bg-pink-100 text-gray-500 border border-gray-300 rounded-l-lg"
              onClick={handleCardChange}
            >
              <FlipToBackOutlinedIcon />
            </button>
            <button
              className="px-2 hover:bg-pink-100 ext-gray-500 border border-gray-300 rounded-r-lg"
              onClick={handleListChange}
            >
              <FormatListBulletedOutlinedIcon />
            </button>
          </div>
          <button className="text-gray-500 border border-gray-300 rounded-lg px-2">
            <SettingsOutlinedIcon />
          </button>
        </div>
      </div>
      {showStyle ? <ListStyle /> : <CardStyle />}
    </div>
  );
};

export default TasksContent;
