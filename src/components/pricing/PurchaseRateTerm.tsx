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

const purchaseData = [
  [">650", "N/A", ""],
  ["650 - 659", "N/A", ""],
  ["660 - 679", "N/A", ""],
  ["680 - 699", "65%", ""],
  ["700 - 719", "70%", ""],
  ["720 - 739", "75%", ""],
  ["740+", "80%", ""],
];

const PurchaseRateTerm = () => {
  const [rows, setRows] = useState(purchaseData);
  const [editMode, setEditMode] = useState(false);
  const [editedRows, setEditedRows] = useState([...purchaseData]);
  const [expanded, setExpanded] = useState(true);

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
      key="Purchase"
      // defaultExpanded
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Purchase/Rate and Term</strong>
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
                <TableCell
                  sx={{ backgroundColor: "#dff2d8", width: "35%" }}
                ></TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#f0f8ff",
                    width: "40%",
                    color: "#c99a3d",
                    fontSize: "1rem",
                  }}
                >
                  Min DSCR
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

export default PurchaseRateTerm;
