import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getStaffList } from "../../store/actions/staffActions";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import {
  Switch,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Button,
  Box,
  Tabs,
  Tab,
  Typography,
  Grid2,
  Card,
  CardContent,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment,
} from "@mui/material";
import { RemoveCircleOutline } from "@mui/icons-material";
import { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import RightSidePanel from "@/components/pricing/RightSidePanel";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const CustomTextField = styled(TextField)`
  background-color: #f7f7f7;
  border-radius: 8px;
  & .MuiOutlinedInput-notchedOutline: {
    border: none;
  };
  & .MuiSelect-select: {
    padding: 10px 14px;
  };
  & .MuiInputBase-input::placeholder: {
    color: #bdbdbd;
  }
`

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
  color: black;
  height: 40px;
  text-transform: none;
  white-space: nowrap;
  padding-left: 20px;
  padding-right: 20px;
`;

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

export default function Pricing() {
  const dispatch = useDispatch<AppDispatch>();
  const [downloadTemplate, setDownloadTemplate] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [showAdvancedSection, setShowAdvancedSection] = useState(false);
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    dispatch(getStaffList());
  }, [dispatch]);

  const handleDownloadTemplate = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value;

    // Check if the value is a string before setting the state
    if (typeof newValue === "string") {
      setDownloadTemplate(newValue);
    } else {
      console.error("The selected value is not a string:", typeof newValue);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div
      className="content bg-[#EEEEEE] p-[16px]"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="rounded-[8px] pb-[16px]">
        <div className="flex p-4 justify-between items-center">
          <h1 className="text-black text-[24px] leading-[36px] font-semibold">
            Pricing
          </h1>
          <div className="flex gap-6">
            <FormControlLabel
              control={<IOSSwitch />}
              label="Compact Pricing"
              labelPlacement="start"
              className="whitespace-nowrap gap-2"
            />
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
            <CustomButton fullWidth>Import Term Sheet</CustomButton>
            <CustomButton fullWidth>Export Term Sheet</CustomButton>
          </div>
        </div>
        <Grid2 container spacing={2}>
          <Grid2
            size={showAdvancedSection ? 6 : 12}
            className="bg-white rounded-xl"
          >
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
                    label="Bridge"
                    {...a11yProps(0)}
                    sx={{ textTransform: "none" }}
                  />
                  <Tab
                    label="Term"
                    {...a11yProps(0)}
                    sx={{ textTransform: "none" }}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={activeTab} index={0}>
                <Typography variant="h5" fontWeight="bold" mb={1}>
                  Loan Structure
                </Typography>
                <Grid2 container spacing={5} mb={2}>
                  <Grid2 size={6}>
                    <InputLabel>Loan Program</InputLabel>
                    <Select value="" displayEmpty fullWidth>
                      <MenuItem disabled value="">Choose</MenuItem>
                      <MenuItem value="">
                        Residential Bridge (Ex. Fix & Flip/Fix & Hold)
                      </MenuItem>
                      <MenuItem value="item-1">Ground Up New Construction</MenuItem>
                      <MenuItem value="item-2">Multifamily Bridge</MenuItem>
                      <MenuItem value="item-3">Commercial Bridge</MenuItem>
                      <MenuItem value="item-4">Portfolio</MenuItem>
                    </Select>
                    <InputLabel>Loan Source</InputLabel>
                    <Select value="" displayEmpty fullWidth>
                      <MenuItem disabled value="">Choose</MenuItem>
                      <MenuItem value="item-1">
                        Refinance - (Property Already Owned)
                      </MenuItem>
                      <MenuItem value="item-2">
                        5+ units Or Commercial Property
                      </MenuItem>
                      <MenuItem value="item-3">New Construction</MenuItem>
                    </Select>
                    <InputLabel>Property Type</InputLabel>
                    <Select value="" displayEmpty fullWidth>
                      <MenuItem disabled value="">Choose</MenuItem>
                    </Select>
                    <InputLabel>Closing Date</InputLabel>
                    <Select value="" displayEmpty fullWidth>
                      <MenuItem disabled value="">Choose</MenuItem>
                    </Select>
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker label="Basic date picker" />
                        </DemoContainer>
                      </LocalizationProvider> */}
                    {!showAdvancedSection && (
                      <Button
                        sx={{
                          marginTop: 2,
                          borderRadius: 50,
                          fontSize: 16,
                          color: "green",
                          border: "1px solid green",
                        }}
                        fullWidth
                        onClick={() => {
                          setShowAdvancedSection(true);
                          setActiveTab(1);
                        }}
                      >
                        Continue
                      </Button>
                    )}
                  </Grid2>
                  <Grid2 size={6}>
                    <InputLabel>
                      Has Customer Had Bankrupt in Past 4 Years?
                    </InputLabel>
                    <Select value="" displayEmpty fullWidth>
                      <MenuItem disabled value="">Choose</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                    </Select>
                    <InputLabel>
                      Has Customer Had Any Forclusers in Past 4 years?{" "}
                    </InputLabel>
                    <Select value="" displayEmpty fullWidth>
                      <MenuItem disabled value="">Choose</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                    </Select>
                  </Grid2>
                </Grid2>
              </CustomTabPanel>

              <CustomTabPanel value={activeTab} index={1}>
                <Box
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    p: 2,
                    borderRadius: 3,
                  }}
                  className="space-y-4"
                >
                  <Box>
                    <Typography>
                      Has Customer Had Bankrupt in Past 4 Years?
                    </Typography>
                    <Select value="" displayEmpty fullWidth>
                      <MenuItem disabled value="">Choose</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                    </Select>
                    <FormControl variant="outlined" fullWidth>
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography>
                      Has Customer Had Any Forclusers in Past 4 years?{" "}
                    </Typography>
                    <Select value="" displayEmpty fullWidth>
                      <MenuItem disabled value="">Choose</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                    </Select>
                  </Box>
                </Box>

                {showAdvancedSection && (
                  <Box>
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        <RemoveCircleOutline sx={{ mr: 2, my: 2 }} />
                        Property
                      </Typography>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold">
                            Property Information
                          </Typography>
                          <InputLabel>Address</InputLabel>
                          <CustomTextField placeholder="Input Address" fullWidth />
                          <Grid2 container spacing={2} my={2}>
                            <Grid2 size={4}>
                              <InputLabel>Zip Code</InputLabel>
                              <CustomTextField placeholder="Input" />
                            </Grid2>
                            <Grid2 size={4}>
                              <InputLabel>State</InputLabel>
                              <Select value="" displayEmpty fullWidth>
                                <MenuItem disabled value="">Choose</MenuItem>
                                <MenuItem value="item-1">Item 1</MenuItem>
                                <MenuItem value="item-2">Item 2</MenuItem>
                                <MenuItem value="item-3">Item 3</MenuItem>
                                <MenuItem value="item-4">Item 4</MenuItem>
                              </Select>
                            </Grid2>
                            <Grid2 size={4}>
                              <InputLabel>City</InputLabel>
                              <CustomTextField placeholder="Input" />
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} my={2}>
                            <Grid2 size={6}>
                              <InputLabel>Property Type</InputLabel>
                              <Select value="" displayEmpty fullWidth>
                                <MenuItem disabled value="">Choose</MenuItem>
                                <MenuItem value="item-1">Item 1</MenuItem>
                                <MenuItem value="item-2">Item 2</MenuItem>
                                <MenuItem value="item-3">Item 3</MenuItem>
                                <MenuItem value="item-4">Item 4</MenuItem>
                              </Select>
                            </Grid2>
                            <Grid2 size={6}>
                              <InputLabel>% of Commercial Use</InputLabel>
                              <CustomTextField placeholder="Input" fullWidth />
                            </Grid2>
                            <Grid2 container size={12} spacing={2} my={2}>
                              <Grid2 size={6}>
                                <InputLabel>Unit Count</InputLabel>
                                <Select value="" displayEmpty fullWidth>
                                  <MenuItem disabled value="">Choose</MenuItem>
                                  <MenuItem value="item-1">Item 1</MenuItem>
                                  <MenuItem value="item-2">Item 2</MenuItem>
                                  <MenuItem value="item-3">Item 3</MenuItem>
                                  <MenuItem value="item-4">Item 4</MenuItem>
                                </Select>
                              </Grid2>
                              <Grid2 size={6}>
                                <InputLabel>Occupied Units</InputLabel>
                                <Select value="" displayEmpty fullWidth>
                                  <MenuItem disabled value="">Choose</MenuItem>
                                  <MenuItem value="item-1">Item 1</MenuItem>
                                  <MenuItem value="item-2">Item 2</MenuItem>
                                  <MenuItem value="item-3">Item 3</MenuItem>
                                  <MenuItem value="item-4">Item 4</MenuItem>
                                </Select>
                              </Grid2>
                            </Grid2>
                          </Grid2>
                          <InputLabel>Construction Description</InputLabel>
                          <Select value="" displayEmpty fullWidth>
                            <MenuItem disabled value="">Choose</MenuItem>
                            <MenuItem value="item-1">Item 1</MenuItem>
                            <MenuItem value="item-2">Item 2</MenuItem>
                            <MenuItem value="item-3">Item 3</MenuItem>
                            <MenuItem value="item-4">Item 4</MenuItem>
                          </Select>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        <RemoveCircleOutline sx={{ mr: 2, my: 2 }} />
                        Loan
                      </Typography>
                      <Card sx={{ my: 2 }}>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold">
                            Transaction Details
                          </Typography>
                          <InputLabel>Transaction Type</InputLabel>
                          <Select value="" displayEmpty fullWidth>
                            <MenuItem disabled value="">Choose</MenuItem>
                            <MenuItem value="item-1">Item 1</MenuItem>
                            <MenuItem value="item-2">Item 2</MenuItem>
                            <MenuItem value="item-3">Item 3</MenuItem>
                            <MenuItem value="item-4">Item 4</MenuItem>
                          </Select>
                          <InputLabel>Exit Strategy</InputLabel>
                          <Select value="" displayEmpty fullWidth>
                            <MenuItem disabled value="">Choose</MenuItem>
                            <MenuItem value="item-1">Item 1</MenuItem>
                            <MenuItem value="item-2">Item 2</MenuItem>
                            <MenuItem value="item-3">Item 3</MenuItem>
                            <MenuItem value="item-4">Item 4</MenuItem>
                          </Select>
                          <InputLabel>Cash Out</InputLabel>
                          <Select value="yes" displayEmpty fullWidth>
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                          </Select>
                        </CardContent>
                      </Card>
                      <Card sx={{ my: 2 }}>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold">
                            Property Financials
                          </Typography>
                          <InputLabel>Purchase Price</InputLabel>
                          <CustomTextField placeholder="Input" fullWidth />
                          <InputLabel>As Is Value</InputLabel>
                          <CustomTextField placeholder="Input" fullWidth />
                          <InputLabel>Rehab Budget</InputLabel>
                          <CustomTextField placeholder="Input" fullWidth />
                          <InputLabel>ARV</InputLabel>
                          <CustomTextField placeholder="Input" fullWidth />
                        </CardContent>
                      </Card>
                      <Card sx={{ my: 2 }}>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold">
                            Rent Roll
                          </Typography>
                          <TableContainer>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell>Unit</TableCell>
                                  <TableCell>Current Rent</TableCell>
                                  <TableCell>Fair Market Rent</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Unit 2</TableCell>
                                  <TableCell>$0</TableCell>
                                  <TableCell>$0</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Unit 3</TableCell>
                                  <TableCell>$0</TableCell>
                                  <TableCell>$0</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <Grid2 container size={12} spacing={2} my={2}>
                            <Grid2 size={6}>
                              <InputLabel>Current Total</InputLabel>
                              <CustomTextField
                                fullWidth
                                placeholder="0"
                                InputProps={{
                                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                              />
                            </Grid2>
                            <Grid2 size={6}>
                              <InputLabel>Fair Market Total</InputLabel>
                              <CustomTextField
                                fullWidth
                                placeholder="0"
                                InputProps={{
                                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                              />
                            </Grid2>
                          </Grid2>
                          <InputLabel>Annual Taxes</InputLabel>
                          <CustomTextField
                            fullWidth
                            placeholder="0"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                          />
                          <InputLabel>Annual Property Insurance</InputLabel>
                          <CustomTextField
                            fullWidth
                            placeholder="0"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                          />
                          <InputLabel>Annual HOA</InputLabel>
                          <CustomTextField
                            fullWidth
                            placeholder="0"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                          />
                        </CardContent>
                      </Card>
                      <Card sx={{ my: 2 }}>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold">
                            Refinance Additional Details
                          </Typography>
                          <InputLabel>Purchase Date</InputLabel>
                          <Select value="" displayEmpty fullWidth>
                            <MenuItem disabled value="">Choose</MenuItem>
                            <MenuItem value="item-1">Item 1</MenuItem>
                            <MenuItem value="item-2">Item 2</MenuItem>
                            <MenuItem value="item-3">Item 3</MenuItem>
                            <MenuItem value="item-4">Item 4</MenuItem>
                          </Select>
                          <InputLabel>
                            Cost of Completed Improvements
                          </InputLabel>
                          <CustomTextField
                            fullWidth
                            placeholder="0"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                          />
                          <InputLabel>Current Loan Balance</InputLabel>
                          <CustomTextField
                            fullWidth
                            placeholder="0"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                          />
                          <InputLabel>Current Lender</InputLabel>
                          <CustomTextField
                            fullWidth
                            placeholder="Input"
                          />
                          <InputLabel>Current Rate</InputLabel>
                          <CustomTextField
                            fullWidth
                            placeholder="0.0%"
                          />
                          <InputLabel>Loan Maturity Date</InputLabel>
                          <Select value="" displayEmpty fullWidth>
                            <MenuItem disabled value="">Choose</MenuItem>
                            <MenuItem value="item-1">Item 1</MenuItem>
                            <MenuItem value="item-2">Item 2</MenuItem>
                            <MenuItem value="item-3">Item 3</MenuItem>
                            <MenuItem value="item-4">Item 4</MenuItem>
                          </Select>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        <RemoveCircleOutline sx={{ mr: 2, my: 2 }} /> Borrower
                      </Typography>
                      <Card sx={{ my: 2 }}>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold">
                            Borrower Information
                          </Typography>
                          <Grid2 container size={12} spacing={2} my={2}>
                            <Grid2 size={6}>
                              <InputLabel>First Name</InputLabel>
                              <CustomTextField placeholder="Input" fullWidth />
                            </Grid2>
                            <Grid2 size={6}>
                              <InputLabel>Last Name</InputLabel>
                              <CustomTextField placeholder="Input" fullWidth />
                            </Grid2>
                          </Grid2>
                          <InputLabel>Credit Score (Median)</InputLabel>
                          <CustomTextField placeholder="Input" fullWidth />
                          <InputLabel>US Citizen?</InputLabel>
                          <Grid2 container size={12} spacing={2} mb={2}>
                            <Grid2 size={6}>
                              <Select value="" displayEmpty fullWidth>
                                <MenuItem disabled value="">Choose</MenuItem>
                                <MenuItem value="yes">Yes</MenuItem>
                                <MenuItem value="no">No</MenuItem>
                              </Select>
                            </Grid2>
                            <Grid2 size={6}>
                              <CustomTextField placeholder="Input" fullWidth />
                            </Grid2>
                          </Grid2>
                        </CardContent>
                      </Card>
                      <Card sx={{ my: 2 }}>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold">
                            Borrower History
                          </Typography>
                          <InputLabel>
                            Current Rental Properties Owned
                          </InputLabel>
                          <CustomTextField placeholder="Input" fullWidth />
                          <InputLabel>
                            Professional Licenses GC, RE, CPA etc
                          </InputLabel>
                          <Select value="" displayEmpty fullWidth>
                            <MenuItem disabled value="">Choose</MenuItem>
                            <MenuItem value="item-1">Item 1</MenuItem>
                            <MenuItem value="item-2">Item 2</MenuItem>
                            <MenuItem value="item-3">Item 3</MenuItem>
                            <MenuItem value="item-4">Item 4</MenuItem>
                          </Select>
                          <InputLabel>
                            Largest 3 Completed Rehab Sizes (Ex, 368k,125)
                          </InputLabel>
                          <Grid2 container spacing={2} my={2}>
                            <Grid2 size={4}>
                              <CustomTextField
                                fullWidth
                                placeholder="0"
                                InputProps={{
                                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                              />
                            </Grid2>
                            <Grid2 size={4}>
                              <CustomTextField
                                fullWidth
                                placeholder="0"
                                InputProps={{
                                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                              />
                            </Grid2>
                            <Grid2 size={4}>
                              <CustomTextField
                                fullWidth
                                placeholder="0"
                                InputProps={{
                                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                              />
                            </Grid2>
                          </Grid2>
                          <InputLabel>
                            Largest 3 Completed Projects(Purchase + Rehab
                            Amount)
                          </InputLabel>
                          <Grid2 container spacing={2} my={2}>
                            <Grid2 size={4}>
                              <CustomTextField
                                fullWidth
                                placeholder="0"
                                InputProps={{
                                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                              />
                            </Grid2>
                            <Grid2 size={4}>
                              <CustomTextField
                                fullWidth
                                placeholder="0"
                                InputProps={{
                                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                              />
                            </Grid2>
                            <Grid2 size={4}>
                              <CustomTextField
                                fullWidth
                                placeholder="0"
                                InputProps={{
                                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                              />
                            </Grid2>
                          </Grid2>
                        </CardContent>
                        <CardContent>
                          <Typography variant="h6" fontWeight="bold">
                            Liquidity
                          </Typography>
                          <InputLabel>Ground Up Deals Completed</InputLabel>
                          <Select value="" displayEmpty fullWidth>
                            <MenuItem disabled value="">Choose</MenuItem>
                            <MenuItem value="item-1">Item 1</MenuItem>
                            <MenuItem value="item-2">Item 2</MenuItem>
                            <MenuItem value="item-3">Item 3</MenuItem>
                            <MenuItem value="item-4">Item 4</MenuItem>
                          </Select>
                          <InputLabel>
                            # Of Units For 3 Largest Ground Up Projects (Ex.
                            45,12,3)
                          </InputLabel>
                          <Grid2 container spacing={2} my={2}>
                            <Grid2 size={4}>
                              <CustomTextField placeholder="0" />
                            </Grid2>
                            <Grid2 size={4}>
                              <CustomTextField placeholder="0" />
                            </Grid2>
                            <Grid2 size={4}>
                              <CustomTextField placeholder="0" />
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} my={2}>
                            <Grid2 size={6}>
                              <InputLabel>Ground Up Deals Completed</InputLabel>
                              <CustomTextField placeholder="Input" fullWidth />
                            </Grid2>
                            <Grid2 size={6}>
                              <InputLabel># Of Units For 3</InputLabel>
                              <CustomTextField placeholder="Input" fullWidth />
                            </Grid2>
                          </Grid2>
                          <Typography variant="h6" fontWeight="bold">
                            Commercial
                          </Typography>
                          <InputLabel>#If 5+ unit Or Commercial Properties Owned (Currently or flipped)</InputLabel>
                          <CustomTextField placeholder="Input" fullWidth />
                          <InputLabel>#Of Units For 3 Largest Completed Projects (Ex. 45,12,3)</InputLabel>
                          <Grid2 container spacing={2} my={2}>
                            <Grid2 size={4}>
                              <CustomTextField placeholder="0" />
                            </Grid2>
                            <Grid2 size={4}>
                              <CustomTextField placeholder="0" />
                            </Grid2>
                            <Grid2 size={4}>
                              <CustomTextField placeholder="0" />
                            </Grid2>
                          </Grid2>
                        </CardContent>
                      </Card>
                      <Button sx={{ borderRadius: 50, fontWeight: 600, padding: 2 }} color="success" fullWidth>Calculate</Button>
                    </Box>
                  </Box>
                )}
              </CustomTabPanel>
            </Box>
          </Grid2>
          {showAdvancedSection && <RightSidePanel />}
        </Grid2>
      </div>
    </div>
  );
}

Pricing.getLayout = (page: ReactNode) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="main-content flex-1">
        <Navbar tab="Pricing" />
        {page}
      </div>
    </div>
  );
};
