import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { getStaffList } from '../store/actions/staffActions';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
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
} from '@mui/material';
import { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
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
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));

const CustomSelect = styled(Select)`
  border-radius: 50px;
  border: 1px solid #ccc;
  padding: 2px 10px;
  font-weight: bold;
  font-size: 14px;
  background-color: white;
  box-shadow: none;
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
`
const CustomButton = styled(Button)`
  font-size: 12px;
  border-radius: 50px;
  border: 1px solid #ccc;
  color: black;
  font-weight: bold;
`

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

const Pricing: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [downloadTemplate, setDownloadTemplate] = useState('')
  const [activeTab, setActiveTab] = useState(0);
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    dispatch(getStaffList());
  }, [dispatch]);

  const handleDownloadTemplate = (event: SelectChangeEvent<string>) => {
    setDownloadTemplate(event.target.value)
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  }

  return (
    <div className="flex h-full">
      <Sidebar  />
      <div className="main-content flex-1">
        <Navbar tab="Pricing" />
        <div className="content bg-[#FDFCF6] p-[16px]" style={{ height: 'calc(100vh - 60px)' }}>
          <div className="bg-white rounded-[8px] border-2 border-[#eaecf0] pb-[16px]">
            <div className="flex p-4 justify-between items-center">
              <h1 className="text-black text-[24px] leading-[36px] font-semibold">Pricing</h1>
              <div className="flex gap-6">
                <FormControlLabel control={<IOSSwitch />} label="Compact Pricing" labelPlacement="start" />
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
            <div className="px-4 pb-[16px]">
              <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={activeTab} onChange={handleTabChange}>
                    <Tab label="Bridge" {...a11yProps(0)} />
                    <Tab label="Term" {...a11yProps(0)} />
                    <Tab />
                  </Tabs>
                </Box>
                <CustomTabPanel value={activeTab} index={0}>
                  <Typography variant='h5' mb={1}>Loan Structure</Typography>
                  <Grid2 container spacing={5} mb={2}>
                    <Grid2 size={6}>
                      <InputLabel>Loan Program</InputLabel>
                      <Select displayEmpty fullWidth>
                        <MenuItem value="">Residential Bridge (Ex. Fix & Flip/Fix & Hold)</MenuItem>
                        <MenuItem value="">Ground Up New Construction</MenuItem>
                        <MenuItem value="">Multifamily Bridge</MenuItem>
                        <MenuItem value="">Commercial Bridge</MenuItem>
                        <MenuItem value="">Portfolio</MenuItem>
                      </Select>
                      <InputLabel>Loan Source</InputLabel>
                      <Select displayEmpty fullWidth>
                        <MenuItem value="">Refinance - (Property Already Owned)</MenuItem>
                        <MenuItem value="">5+ units Or Commercial Property</MenuItem>
                        <MenuItem value="">New Construction</MenuItem>
                      </Select>
                      <InputLabel>Property Type</InputLabel>
                      <Select displayEmpty fullWidth>
                        <MenuItem value="">Choose</MenuItem>
                      </Select>
                      <InputLabel>Closing Date</InputLabel>
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker label="Basic date picker" />
                        </DemoContainer>
                      </LocalizationProvider> */}
                      <Button
                        sx={{
                          marginTop: 2,
                          borderRadius: 50,
                          fontSize: 16,
                          color: "green",
                          border: "1px solid green"
                        }}
                        fullWidth
                      >
                        Continue
                      </Button>
                    </Grid2>
                    <Grid2 size={6}>
                      <InputLabel>Has Customer Had Bankrupt in Past 4 Years?</InputLabel>
                      <Select fullWidth>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                      </Select>
                      <InputLabel>Has Customer Had Any Forclusers in Past 4 years? </InputLabel>
                      <Select fullWidth>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                      </Select>
                    </Grid2>
                  </Grid2>
                </CustomTabPanel>

                <CustomTabPanel value={activeTab} index={1}></CustomTabPanel>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;