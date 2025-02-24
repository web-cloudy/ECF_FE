import { ReactNode, useState } from "react";
import { styled } from "@mui/material/styles";
import { Select, MenuItem, Button, SelectChangeEvent } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/router";

export default function Quotes() {
  const router = useRouter();

  const [downloadTemplate, setDownloadTemplate] = useState("");

  const handleDownloadTemplate = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value;

    // Check if the value is a string before setting the state
    if (typeof newValue === "string") {
      setDownloadTemplate(newValue);
    } else {
      console.error("The selected value is not a string:", typeof newValue);
    }
  };

  return (
    <div className="p-3 bg-gray-100">
      <div className="flex p-4 justify-between items-center">
        <h1 className="text-black text-[24px] leading-[36px] font-semibold">
          Quotes
        </h1>
        <div className="flex gap-6">
          <CustomSelect
            labelId="download-template-select-label"
            id="download-template"
            value={downloadTemplate}
            onChange={handleDownloadTemplate}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Download Template</MenuItem>
            <MenuItem value="template-1">Template-1</MenuItem>
            <MenuItem value="template-2">Template-2</MenuItem>
          </CustomSelect>
          <CustomButton onClick={() => router.push("/pricing")} fullWidth>
            Evaluate new loan
          </CustomButton>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Application Name</StyledTableCell>
              <StyledTableCell>Loan Type</StyledTableCell>
              <StyledTableCell>Loan Amount</StyledTableCell>
              <StyledTableCell>Interest Rate</StyledTableCell>
              <StyledTableCell>Create On</StyledTableCell>
              <StyledTableCell>Rate As Of</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell>Postal</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <TableRow key={index}>
                  <StyledTableCell>1234</StyledTableCell>
                  <StyledTableCell>645 StarBroo..</StyledTableCell>
                  <StyledTableCell>Bridge Loan</StyledTableCell>
                  <StyledTableCell>$600,000</StyledTableCell>
                  <StyledTableCell>12.5</StyledTableCell>
                  <StyledTableCell>07/08/2024</StyledTableCell>
                  <StyledTableCell>09/10/2024</StyledTableCell>
                  <StyledTableCell>645 StarBroo..</StyledTableCell>
                  <StyledTableCell>Nohahy</StyledTableCell>
                  <StyledTableCell>3546</StyledTableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const CustomSelect = styled(Select)`
  border-radius: 50px;
  border: 1px solid #ccc;
  padding: 2px 10px;
  font-weight: bold;
  font-size: 14px;
  background-color: white;
  box-shadow: none;
  height: 40px;
  & .MuiSelect-select: {
    padding-right: 30px
  };
  &:hover {
    background-color: #f5f5f5
  },
  & .MuiSvgIcon-root: {
    right; 8px;
    position: absolute;
  }
`;

const CustomButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  border-radius: 50px;
  border: 1px solid #ccc;
  color: white;
  background-color: #009345;
  height: 40px;
  padding: 15px;
  text-transform: none;
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FAF8E9",
    color: "#D2A645",
  },
  [`&.${tableCellClasses.body}`]: {
    "&:first-of-type": {
      color: "#009345", // Change 'red' to your desired color
    },
  },
  fontSize: 16,
  borderWidth: 1,
  borderColor: "divider",
}));

Quotes.getLayout = (page: ReactNode) => {
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
