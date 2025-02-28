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

const DcsrData = [
  [">0.75", "N/A", "N/A"],
  ["0.75 - 0.99", "-5%", "=Max LTV-C490%"],
  ["1.0 - 1.19", "0%", ""],
  ["1.2 - 1.29", "0%", ""],
  ["1.3+", "0%", ""],
];

const Dscr = () => {
  const [rows, setRows] = useState(DcsrData);
  const [editMode, setEditMode] = useState(false);
  const [editedRows, setEditedRows] = useState([...DcsrData]);
  const [expanded, setExpanded] = useState(false);

  const handleEditClick = (event: React.MouseEvent) => {
    setEditMode(!editMode);
    event.stopPropagation();
    setExpanded(true);
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
    <Accordion
      key="Dscr"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>DSCR(LTV Adjustment)</strong>
        </Typography>
        <IconButton sx={{ marginLeft: "auto" }} onClick={handleEditClick}>
          {editMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "25%" }}></TableCell>
                <TableCell sx={{ width: "35%" }}></TableCell>
                <TableCell
                  sx={{
                    width: "40%",
                    fontSize: "1rem",
                  }}
                >
                  Max LTV
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <TableCell
                      key={colIndex}
                      sx={{
                        backgroundColor: "#f0f8ff",
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

export default Dscr;
