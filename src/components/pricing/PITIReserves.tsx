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

const pitiReservesData = [
  { label: "Purchase", value: "0" },
  { label: "Refinance", value: "9" },
];

const PITIReserves = () => {
  const [pitiReservesRows, setPITIReservesRows] = useState(pitiReservesData);
  const [editPITIReservesMode, setEditPITIReservesMode] = useState(false);
  const [editedPITIReservesRows, setEditedPITIReservesRows] = useState([
    ...pitiReservesData,
  ]);
  const [expanded, setExpanded] = useState(false);

  const handlePITIReservesEditClick = (event: React.MouseEvent) => {
    setEditPITIReservesMode(!editPITIReservesMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handlePITIReservesChange = (index: number, value: string) => {
    const newRows = [...editedPITIReservesRows];
    newRows[index].value = value;
    setEditedPITIReservesRows(newRows);
  };

  const handlePITIReservesSave = (event: React.MouseEvent) => {
    setPITIReservesRows([...editedPITIReservesRows]);
    setEditPITIReservesMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="PITIReserves"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>PITI Reserves</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={
            editPITIReservesMode
              ? handlePITIReservesSave
              : handlePITIReservesEditClick
          }
        >
          {editPITIReservesMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {pitiReservesRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell>
                    {editPITIReservesMode ? (
                      <TextField
                        fullWidth
                        value={editedPITIReservesRows[index].value}
                        onChange={(e) =>
                          handlePITIReservesChange(index, e.target.value)
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

export default PITIReserves;
