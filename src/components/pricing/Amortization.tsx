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
import CheckIcon from "@mui/icons-material/Check";

const amortiaztionData = [
  { label: "30 Year", value: "" },
  { label: "25 Year", value: "" },
  { label: "20 Year", value: "" },
  { label: "Interest Only", value: "" },
];

const Amortization = () => {
  const [amortizationRows, setAmortizationRows] = useState(amortiaztionData);
  const [editAmortizationMode, setEditAmortizationMode] = useState(false);
  const [editedAmortizationRows, setEditedAmortizationRows] = useState([
    ...amortiaztionData,
  ]);
  const [expanded, setExpanded] = useState(false);

  const handleAmortizationEditClick = (event: React.MouseEvent) => {
    setEditAmortizationMode(!editAmortizationMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handleAmortizationChange = (index: number, value: string) => {
    const newRows = [...editedAmortizationRows];
    newRows[index].value = value;
    setEditedAmortizationRows(newRows);
  };

  const handleAmortizationSave = (event: React.MouseEvent) => {
    setAmortizationRows([...editedAmortizationRows]);
    setEditAmortizationMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="Amortization"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>AMORTIZATION</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={
            editAmortizationMode
              ? handleAmortizationSave
              : handleAmortizationEditClick
          }
        >
          {editAmortizationMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {amortizationRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell sx={{ width: "5%" }}>
                    <Checkbox sx={{ padding: 0 }} />
                  </TableCell>
                  <TableCell>
                    {editAmortizationMode ? (
                      <TextField
                        fullWidth
                        value={editedAmortizationRows[index].value}
                        onChange={(e) =>
                          handleAmortizationChange(index, e.target.value)
                        }
                      />
                    ) : (
                      row.value
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default Amortization;
