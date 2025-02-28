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

const pitiEscrowData = [
  { label: "Purchase", value: "0" },
  { label: "Refinance", value: "0" },
];

const PITIEscrow = () => {
  const [pitiEscrowRows, setPITIEscrowRows] = useState(pitiEscrowData);
  const [editPITIEscrowMode, setEditPITIEscrowMode] = useState(false);
  const [editedPITIEscrowRows, setEditedPITIEscrowRows] = useState([
    ...pitiEscrowData,
  ]);
  const [expanded, setExpanded] = useState(false);

  const handlePITIEscrowEditClick = (event: React.MouseEvent) => {
    setEditPITIEscrowMode(!editPITIEscrowMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handlePITIEscrowChange = (index: number, value: string) => {
    const newRows = [...editedPITIEscrowRows];
    newRows[index].value = value;
    setEditedPITIEscrowRows(newRows);
  };

  const handlePITIEscrowSave = (event: React.MouseEvent) => {
    setPITIEscrowRows([...editedPITIEscrowRows]);
    setEditPITIEscrowMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="PITIEscrow"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>PITI Escrow</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={
            editPITIEscrowMode
              ? handlePITIEscrowSave
              : handlePITIEscrowEditClick
          }
        >
          {editPITIEscrowMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {pitiEscrowRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell>
                    {editPITIEscrowMode ? (
                      <TextField
                        fullWidth
                        value={editedPITIEscrowRows[index].value}
                        onChange={(e) =>
                          handlePITIEscrowChange(index, e.target.value)
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

export default PITIEscrow;
