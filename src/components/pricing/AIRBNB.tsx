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

const airbnbData = [
  { label: "label", value: "value" },
  { label: "label", value: "value" },
  { label: "label", value: "value" },
  { label: "label", value: "value" },
  { label: "label", value: "value" },
];

const AIRBNB = () => {
  const [airbnbRows, setAIRBNBRows] = useState(airbnbData);
  const [editAIRBNBMode, setEditAIRBNBMode] = useState(false);
  const [editedAIRBNBRows, setEditedAIRBNBRows] = useState([...airbnbData]);
  const [expanded, setExpanded] = useState(false);

  const handleAIRBNBEditClick = (event: React.MouseEvent) => {
    setEditAIRBNBMode(!editAIRBNBMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handleAIRBNBChange = (index: number, value: string) => {
    const newRows = [...editedAIRBNBRows];
    newRows[index].value = value;
    setEditedAIRBNBRows(newRows);
  };

  const handleAIRBNBSave = (event: React.MouseEvent) => {
    setAIRBNBRows([...editedAIRBNBRows]);
    setEditAIRBNBMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="AIRBNB"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>AIRBNB</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={editAIRBNBMode ? handleAIRBNBSave : handleAIRBNBEditClick}
        >
          {editAIRBNBMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {airbnbRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell>
                    {editAIRBNBMode ? (
                      <TextField
                        fullWidth
                        value={editedAIRBNBRows[index].value}
                        onChange={(e) =>
                          handleAIRBNBChange(index, e.target.value)
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

export default AIRBNB;
