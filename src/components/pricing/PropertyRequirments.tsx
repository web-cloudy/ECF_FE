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
import EditIcon from "@mui/icons-material/Edit";

const ecfmCategories = [
  "SFR",
  "2 Family",
  "3 Family",
  "4 Family",
  "Warrantable Condo",
  "Unwarrantable Condo",
  "5+ Units Multi Family",
  "Mixed Use (51%+ Commercial)",
  "Mixed Use (51%+ Resi)",
  "AirBnB",
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

const PropertyRequirments = () => {
  const [checked, setChecked] = useState(
    Array(ecfmCategories.length).fill(false)
  );

  const handleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(
    ecfmCategories.map(() => ({
      minDSCR: "",
      processingFee: "",
      underwritingFee: "",
      closingCost: "",
      maxVacantUnits: "",
    }))
  );

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setFormData(updatedData);
  };

  return (
    <Container>
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
              }}
            >
              ECFM
            </TableCell>
          </TableHead>
        </Table>
      </TableContainer>
      <Accordion key="ECFM">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <strong>ECFM</strong>
          </Typography>
          {/* <IconButton
            onClick={() => setEditMode(!editMode)}
            sx={{ marginLeft: "auto" }}
          >
            <EditIcon />
          </IconButton> */}
          <IconButton sx={{ marginLeft: "auto" }}>
            <EditIcon />
          </IconButton>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
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
                {ecfmCategories.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    {[
                      "minDSCR",
                      "processingFee",
                      "underwritingFee",
                      "closingCost",
                      "maxVacantUnits",
                    ].map((field) => (
                      <TableCell key={field}>
                        {editMode ? (
                          <TextField
                            variant="outlined"
                            size="small"
                            value={
                              formData[index][
                                field as keyof (typeof formData)[number]
                              ]
                            }
                            onChange={(e) =>
                              handleInputChange(index, field, e.target.value)
                            }
                          />
                        ) : (
                          formData[index][
                            field as keyof (typeof formData)[number]
                          ] || ""
                        )}
                      </TableCell>
                    ))}
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
        <Accordion key={section.title}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <strong>{section.title}</strong>
            </Typography>
            <IconButton sx={{ marginLeft: "auto" }}>
              <EditIcon />
            </IconButton>
          </AccordionSummary>
          <AccordionDetails>
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

export default PropertyRequirments;
