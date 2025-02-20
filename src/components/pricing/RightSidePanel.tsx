import { SyntheticEvent, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Grid2,
  InputLabel,
  Select,
  MenuItem,
  Button,
  styled,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const CustomButton = styled(Button)`
  font-size: 12px;
  border-radius: 50px;
  border: 1px solid #ccc;
  color: black;
  background-color: #009045;
  font-weight: bold;
`;

const rows = [
  ["Product", "30yr FRM", "30yr FRM", "30yr FRM"],
  ["Loan Type", "Bridge Loan", "Bridge Loan", "Bridge Loan"],
  ["Rate", "9.1%", "9.1%", "9.1%"],
  ["Loan Amount / LTV", "63%", "63%", "63%"],
  ["Prepay penalty", "0.95", "0.95", "0.95"],
  ["Points", "0.95", "0.95", "0.95"],
  ["Fees", "0.95", "0.95", "0.95"],
];

export default function RightSidePanel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="px-4 pb-[16px]">
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Pricing" {...a11yProps(0)} />
            <Tab label="Log" {...a11yProps(0)} />
            <Tab />
          </Tabs>
        </Box>
        <CustomTabPanel value={activeTab} index={0}>
          <div className="flex justify-between items-center">
            <Typography variant="h5" mb={1}>
              Loan Structure
            </Typography>
            <CustomButton variant="contained">Add Criteria</CustomButton>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Program 1</TableCell>
                  <TableCell>Program 2</TableCell>
                  <TableCell>Program 3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button variant="contained" color="success">
                      Select
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="success">
                      Select
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="success">
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map((col, colIndex) => (
                      <TableCell key={colIndex}>{col}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>

        <CustomTabPanel value={activeTab} index={1}>
          <Typography variant="h5" mb={1}>
            Pricing
          </Typography>
          <Box
            sx={{ border: 1, borderColor: "divider", p: 2, borderRadius: 3 }}
            className="flex flex-wrap gap-2"
          >
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/3"
            >
              <Typography variant="h6">Max Logn Amount</Typography>
              <Typography variant="h5">$40,000.00</Typography>
            </Box>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/3"
            >
              <Typography variant="h6">Final Buy Rate</Typography>
              <Typography variant="h5">$100,000.00</Typography>
            </Box>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/3"
            >
              <Typography variant="h6">Price Adjustment</Typography>
              <Typography variant="h5">$150,000.00</Typography>
            </Box>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/2"
            >
              <Typography variant="h6">Risk Score</Typography>
              <Typography variant="h5">$44,000.00</Typography>
            </Box>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/2"
            >
              <Typography variant="h6">Risk Bucket</Typography>
              <Typography variant="h5">$80,000.00</Typography>
            </Box>
          </Box>
          <Box
            sx={{ border: 1, borderColor: "divider", p: 2, borderRadius: 3 }}
            className="flex flex-wrap gap-2"
          >
            <Typography variant="h6">Max Logn Amount</Typography>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/3"
            >
              <Typography variant="h6">Max Logn Amount</Typography>
              <Typography variant="h5">$40,000.00</Typography>
            </Box>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/3"
            >
              <Typography variant="h6">Final Buy Rate</Typography>
              <Typography variant="h5">$100,000.00</Typography>
            </Box>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/3"
            >
              <Typography variant="h6">Price Adjustment</Typography>
              <Typography variant="h5">$150,000.00</Typography>
            </Box>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/2"
            >
              <Typography variant="h6">Risk Score</Typography>
              <Typography variant="h5">$44,000.00</Typography>
            </Box>
            <Box
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              className="min-w-1/2"
            >
              <Typography variant="h6">Risk Bucket</Typography>
              <Typography variant="h5">$80,000.00</Typography>
            </Box>
          </Box>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
