import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const refinancesData = [
  [">650", "N/A", ""],
  ["650 - 679", "N/A", ""],
  ["680 - 699", "70.00%", ""],
  ["700 - 719", "70.00%", ""],
  ["720 - 739", "75.00%", ""],
  ["740+", "75.00%", ""],
];

const Refinances = () => {
  const [rows, setRows] = useState(refinancesData);
  const [editMode, setEditMode] = useState(false);
  const [editedRows, setEditedRows] = useState([...refinancesData]);

  const handleEditClick = () => {
    setEditMode(!editMode);
    if (editMode) {
      setRows([...editedRows]);
    }
  };

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    const newRows = [...editedRows];
    newRows[rowIndex][colIndex] = value;
    setEditedRows(newRows);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Cash Out Refinances</strong>
        </Typography>
        <IconButton sx={{ marginLeft: "auto" }}>
          <IconButton onClick={handleEditClick}>
            {editMode ? <CheckIcon /> : <EditIcon />}
          </IconButton>
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <TableCell
                      key={colIndex}
                      //   sx={{
                      //     backgroundColor:
                      //       colIndex === 1
                      //         ? "#dff2d8"
                      //         : colIndex === 2
                      //         ? "#f0f8ff"
                      //         : "inherit",
                      //   }}
                      sx={{
                        width:
                          colIndex === 0
                            ? "25%"
                            : colIndex === 1
                            ? "35%"
                            : "40%",
                        backgroundColor:
                          colIndex === 1
                            ? "#dff2d8"
                            : colIndex === 2
                            ? "#f0f8ff"
                            : "inherit",
                      }}
                    >
                      {editMode ? (
                        <TextField
                          fullWidth
                          value={editedRows[rowIndex][colIndex]}
                          onChange={(e) =>
                            handleChange(rowIndex, colIndex, e.target.value)
                          }
                        />
                      ) : (
                        cell
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

export default Refinances;
