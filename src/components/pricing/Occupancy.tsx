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
  const [expanded, setExpanded] = useState(false);

  const handleOccupancyEditClick = (event: React.MouseEvent) => {
    setEditOccupancyMode(!editOccupancyMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handleOccupancyChange = (index: number, value: string) => {
    const newRows = [...editedOccupancyRows];
    newRows[index].value = value;
    setEditedOccupancyRows(newRows);
  };

  const handleOccupancySave = (event: React.MouseEvent) => {
    setOccupancyRows([...editedOccupancyRows]);
    setEditOccupancyMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="Occupancy"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Occupancy</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={
            editOccupancyMode ? handleOccupancySave : handleOccupancyEditClick
          }
        >
          {editOccupancyMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {occupancyRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell>
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
