import { SyntheticEvent, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Grid2,
  Button,
  styled,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses,
  Modal,
} from "@mui/material";
import GuidlinesModal from "./GuidlinesModal";

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
  color: white;
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

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(249, 248, 234)",
    color: "rgb(202, 175, 111)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  borderWidth: 1,
  borderColor: "divider",
}));

const modalStyle = {
  position: "absolute",
  top: "20%",
  left: "20%",
  transform: "translate(-10%, -10%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
  overflow: "auto",
};

export default function RightSidePanel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid2 size={6} className="bg-white rounded-xl">
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            textColor="inherit"
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "green", // Change 'green' to your desired color
              },
            }}
          >
            <Tab
              label="Pricing"
              {...a11yProps(0)}
              sx={{
                textTransform: "none",
              }}
            />
            <Tab label="Log" {...a11yProps(0)} sx={{ textTransform: "none" }} />
            <Tab />
          </Tabs>
        </Box>
        <CustomTabPanel value={activeTab} index={0}>
          <div className="flex justify-between items-center">
            <Typography variant="h5" mb={1}>
              Loan Structure
            </Typography>
            <CustomButton variant="contained" onClick={handleOpen}>
              View Criteria
            </CustomButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <GuidlinesModal />
              </Box>
            </Modal>
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
          <Grid2
            container
            spacing={2}
            sx={{
              border: 1,
              borderColor: "divider",
              padding: 2,
              borderRadius: 3,
            }}
          >
            <Grid2
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              size={4}
            >
              <Typography variant="h6">Max Logn Amount</Typography>
              <Typography variant="h5">$40,000.00</Typography>
            </Grid2>
            <Grid2
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              size={4}
            >
              <Typography variant="h6">Final Buy Rate</Typography>
              <Typography variant="h5">$100,000.00</Typography>
            </Grid2>
            <Grid2
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              size={4}
              className="min-w-1/3"
            >
              <Typography variant="h6">Price Adjustment</Typography>
              <Typography variant="h5">$150,000.00</Typography>
            </Grid2>
            <Grid2
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              size={6}
            >
              <Typography variant="h6">Risk Score</Typography>
              <Typography variant="h5">$44,000.00</Typography>
            </Grid2>
            <Grid2
              sx={{ border: 1, borderColor: "divider", p: 1, borderRadius: 3 }}
              size={6}
            >
              <Typography variant="h6">Risk Bucket</Typography>
              <Typography variant="h5">$80,000.00</Typography>
            </Grid2>
          </Grid2>
          {/* Levarages */}
          <Box
            sx={{
              border: 1,
              borderColor: "divider",
              padding: 2,
              borderRadius: 3,
              marginTop: 2,
            }}
          >
            <Typography variant="h5">Levarages</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Indicator</StyledTableCell>
                    <StyledTableCell>LTV (As is)</StyledTableCell>
                    <StyledTableCell>Program 2</StyledTableCell>
                    <StyledTableCell>Program 3</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell sx={{ color: "green" }}>
                      Max
                    </StyledTableCell>
                    <StyledTableCell>70%</StyledTableCell>
                    <StyledTableCell>70%</StyledTableCell>
                    <StyledTableCell>70%</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell sx={{ color: "green" }}>
                      Adjusted Max
                    </StyledTableCell>
                    <StyledTableCell>70%</StyledTableCell>
                    <StyledTableCell>40%</StyledTableCell>
                    <StyledTableCell>60%</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell sx={{ color: "green" }}>
                      Requested
                    </StyledTableCell>
                    <StyledTableCell>60%</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Grid2 container marginTop={2} spacing={2}>
              <Grid2
                size={6}
                sx={{
                  p: 2,
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6">Profitability</Typography>
                <Typography variant="h5">$450,000.00</Typography>
              </Grid2>
              <Grid2
                size={6}
                sx={{
                  p: 2,
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6">Rent Yield</Typography>
                <Typography variant="h5">$450,000.00</Typography>
              </Grid2>
            </Grid2>
          </Box>
          {/* Final Price */}
          <Box
            sx={{
              p: 2,
              border: 1,
              borderColor: "divider",
              borderRadius: 3,
              marginTop: 2,
            }}
            className="flex flex-col gap-3"
          >
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
                backgroundColor: "#F6FAEA",
              }}
            >
              <Typography variant="body1">Final Price</Typography>
              <Typography variant="h5">104,512%</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
              className="flex justify-between items-center"
            >
              <Typography variant="body1">Bise Price</Typography>
              <Typography variant="body1">103.887</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
              className="flex justify-between items-center"
            >
              <Typography variant="body1">Actual Interest Rato</Typography>
              <Typography variant="body1">0.08</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
              className="flex justify-between items-center"
            >
              <Typography variant="body1">
                Prepayment Penalty - Max Price
              </Typography>
              <Typography variant="body1">105.1</Typography>
            </Box>
          </Box>
          {/* Levarages Adjustment */}
          <Box
            sx={{
              p: 2,
              border: 1,
              borderColor: "divider",
              borderRadius: 3,
              marginTop: 2,
            }}
            className="flex flex-col gap-3"
          >
            <Typography variant="h5" mb={1}>
              Levarages Adjustment
            </Typography>
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
              className="flex justify-between items-center"
            >
              <Typography variant="body1">Total Adjustments</Typography>
              <Typography variant="body1">$410,000.00</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
              className="flex justify-between items-center"
            >
              <Typography variant="body1">Total Negative</Typography>
              <Typography variant="body1">$80,000.00</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
              className="flex justify-between items-center"
            >
              <Typography variant="body1">Total Positive</Typography>
              <Typography variant="body1">$210,000.00</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
              className="flex justify-between items-center"
            >
              <Typography variant="body1">Median FICO</Typography>
              <Typography variant="body1">$30,000.00</Typography>
            </Box>
          </Box>
          {/* Proceeds */}
          <Box
            sx={{
              border: 1,
              borderColor: "divider",
              padding: 2,
              borderRadius: 3,
              marginTop: 2,
            }}
          >
            <Typography variant="h5">Proceeds</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Indicator</StyledTableCell>
                    <StyledTableCell>Initial Proceeds</StyledTableCell>
                    <StyledTableCell>Rehab Amount</StyledTableCell>
                    <StyledTableCell>Total Max loan amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell sx={{ color: "green" }}>
                      Max
                    </StyledTableCell>
                    <StyledTableCell>70%</StyledTableCell>
                    <StyledTableCell>70%</StyledTableCell>
                    <StyledTableCell>70%</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell sx={{ color: "green" }}>
                      Adjusted Max
                    </StyledTableCell>
                    <StyledTableCell>70%</StyledTableCell>
                    <StyledTableCell>40%</StyledTableCell>
                    <StyledTableCell>60%</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell sx={{ color: "green" }}>
                      Requested
                    </StyledTableCell>
                    <StyledTableCell>60%</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CustomTabPanel>
      </Box>
    </Grid2>
  );
}
