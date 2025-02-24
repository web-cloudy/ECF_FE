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

const occupancyCategories = [
  { label: "Purchase", value: "0%" },
  { label: "Refinance", value: "75%" },
];

const Occupancy = () => {
  const [occupancyRows, setOccupancyRows] = useState(occupancyCategories);
  const [editOccupancyMode, setEditOccupancyMode] = useState(false);
  const [editedOccupancyRows, setEditedOccupancyRows] = useState([
    ...occupancyCategories,
  ]);

  const handleOccupancyEditClick = () => {
    setEditOccupancyMode(!editOccupancyMode);
  };

  const handleOccupancyChange = (index: number, value: string) => {
    const newRows = [...editedOccupancyRows];
    newRows[index].value = value;
    setEditedOccupancyRows(newRows);
  };

  const handleOccupancySave = () => {
    setOccupancyRows([...editedOccupancyRows]);
    setEditOccupancyMode(false);
  };

  return (
    <Accordion key="Occupancy">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Occupancy</strong>
        </Typography>
        <IconButton sx={{ marginLeft: "auto" }}>
          <IconButton
            onClick={
              editOccupancyMode ? handleOccupancySave : handleOccupancyEditClick
            }
          >
            {editOccupancyMode ? <CheckIcon /> : <EditIcon />}
          </IconButton>
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer>
          <Table>
            <TableBody>
              {occupancyRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell sx={{ width: "75%" }}>
                    {editOccupancyMode ? (
                      <TextField
                        fullWidth
                        value={editedOccupancyRows[index].value}
                        onChange={(e) =>
                          handleOccupancyChange(index, e.target.value)
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

export default Occupancy;
