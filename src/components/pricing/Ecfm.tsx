import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  TextField,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

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

const Ecfm = () => {
  const [editEcfmMode, setEditEcfmMode] = useState(false);
  const [formEcfmData, setFormEcfmData] = useState(
    ecfmCategories.map(() => ({
      minDSCR: "",
      processingFee: "",
      underwritingFee: "",
      closingCost: "",
      maxVacantUnits: "",
    }))
  );
  const [expanded, setExpanded] = useState(true);

  const handleEcfmEditClick = (event: React.MouseEvent) => {
    setEditEcfmMode(!editEcfmMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handleEcfmChange = (index: number, field: string, value: string) => {
    const updatedData = [...formEcfmData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setFormEcfmData(updatedData);
  };

  return (
    <Accordion
      key="ECFM"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>ECFM</strong>
        </Typography>
        <IconButton sx={{ marginLeft: "auto" }} onClick={handleEcfmEditClick}>
          {editEcfmMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "25%" }}></TableCell>
                <TableCell></TableCell>
                {[
                  "Min DSCR",
                  "Processing Fee",
                  "Underwriting Fee",
                  "Closing Cost",
                  "Max Amount of Vacant Units?",
                ].map((heading, index) => (
                  <TableCell key={index} sx={{ color: "#c99a3d" }}>
                    {heading}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ecfmCategories.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item}</TableCell>
                  <TableCell>
                    <Checkbox sx={{ padding: 0 }} />
                  </TableCell>
                  {[
                    "minDSCR",
                    "processingFee",
                    "underwritingFee",
                    "closingCost",
                    "maxVacantUnits",
                  ].map((field) => (
                    <TableCell key={field}>
                      {editEcfmMode ? (
                        <TextField
                          fullWidth
                          variant="outlined"
                          size="small"
                          value={
                            formEcfmData[index][
                              field as keyof (typeof formEcfmData)[number]
                            ]
                          }
                          onChange={(e) =>
                            handleEcfmChange(index, field, e.target.value)
                          }
                        />
                      ) : (
                        formEcfmData[index][
                          field as keyof (typeof formEcfmData)[number]
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
  );
};

export default Ecfm;
