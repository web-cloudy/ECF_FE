import { useState } from "react";
import {
  Box,
  Checkbox,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ecfmData = [
  {
    name: "SFR",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "2 Family",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "3 Family",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "4 Family",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "Warrentable Condo",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "Unwarrentable Condo",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "5+ Units Multi Family",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "Mixed Use (51%+ Commercial)",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "Mixed Use (51%+ Resi)",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
  {
    name: "AirBnb",
    minDscr: "$398.23",
    processingFee: "$2274.65",
    underwritingFee: "3284.22",
    closingCost: "$4302.00",
    maxVacantUnits: "$8234.85",
  },
];

const titleCategories = [
  { label: "Minimum Unit Count", value: "1" },
  { label: "Max Unit Count", value: "8" },
  { label: "MIN LOAN AMOUNT", value: "$55,000" },
  { label: "MAX LOAN AMOUNT", value: "$2,000,000" },
  { label: "MINIMUM ASSET VALUES", value: "$100,000.00" },
  { label: "Max Acreage Size", value: "10 acres" },
];

const occupancyCategories = [
  { label: "Purchase", value: "0%" },
  { label: "Refinance", value: "75%" },
];

const seasoningRequirementsCategories = [
  { label: "Cash Out", value: "6 Months" },
  { label: "Rate and Term", value: "3 Months" },
];

const tableBorderRound = {
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
};

const PropertyRequirmentsModal = () => {
  return (
    <Container maxWidth={false}>
      <TableContainer sx={tableBorderRound}>
        <Table>
          <TableHead>
            <TableCell
              sx={{
                backgroundColor: "#c99a3d",
                color: "white",
                padding: 2,
                width: "25%",
                borderRight: "1px solid white",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              Program Name
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#c99a3d",
                color: "white",
                padding: 2,
                width: "75%",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              ECFM
            </TableCell>
          </TableHead>
        </Table>
      </TableContainer>
      <Accordion
        key="ECFM"
        defaultExpanded
        sx={{ "&.Mui-expanded": { margin: 0 } }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <strong>ECFM</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell sx={{ color: "#c99a3d" }}>Min DSCR</TableCell>
                  <TableCell sx={{ color: "#c99a3d" }}>
                    Processing Fee
                  </TableCell>
                  <TableCell sx={{ color: "#c99a3d" }}>
                    Underwriting Fee
                  </TableCell>
                  <TableCell sx={{ color: "#c99a3d" }}>Closing Cost</TableCell>
                  <TableCell sx={{ color: "#c99a3d" }}>
                    Max Amount of Vacant Units?
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ecfmData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{item.minDscr}</TableCell>
                    <TableCell>{item.processingFee}</TableCell>
                    <TableCell>{item.underwritingFee}</TableCell>
                    <TableCell>{item.closingCost}</TableCell>
                    <TableCell>{item.maxVacantUnits}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      {[
        { title: "Title", data: titleCategories },
        { title: "Occupancy", data: occupancyCategories },
        {
          title: "Seasoning Requirements",
          data: seasoningRequirementsCategories,
        },
      ].map((section) => (
        <Accordion key={section.title} sx={{ "&.Mui-expanded": { margin: 0 } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <strong>{section.title}</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <TableContainer>
              <Table>
                <TableBody>
                  {section.data.map((item) => (
                    <TableRow
                      key={item.label}
                      sx={{ backgroundColor: "#f9fef9" }}
                    >
                      <TableCell
                        sx={{ width: "25%", borderRight: "1px solid f9fef9" }}
                      >
                        {item.label}
                      </TableCell>
                      <TableCell sx={{ width: "75%" }}>{item.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
      {}
    </Container>
  );
};

export default PropertyRequirmentsModal;
