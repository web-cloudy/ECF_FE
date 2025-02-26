import { ReactNode, SyntheticEvent, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import PropertyRequirments from "@/components/pricing/PropertyRequirments";
import Leverage from "@/components/pricing/Leverage";
import LoanRequirments from "@/components/pricing/LoanRequirments";
import BorrowerRequirments from "@/components/pricing/BorrowerRequirments";

export default function Guidlines() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <h1 className="text-black text-[24px] leading-[36px] font-semibold py-4 px-8">
          Guidlines
        </h1>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Property Requirments" value="1" />
                <Tab label="Leverage/Credit" value="2" />
                <Tab label="Loan Requirments" value="3" />
                <Tab label="Borrower Requirments" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <PropertyRequirments />
            </TabPanel>
            <TabPanel value="2">
              <Leverage />
            </TabPanel>
            <TabPanel value="3">
              <LoanRequirments />
            </TabPanel>
            <TabPanel value="4">
              <BorrowerRequirments />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

Guidlines.getLayout = (page: ReactNode) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content flex-1">
        <Navbar tab="Pricing" />
        {page}
      </div>
    </div>
  );
};
