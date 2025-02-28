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
const refinancesData = [
  [">650", "N/A", ""],
  ["650 - 679", "N/A", ""],
  ["680 - 699", "70.00%", ""],
  ["700 - 719", "70.00%", ""],
  ["720 - 739", "75.00%", ""],
  ["740+", "75.00%", ""],
];

const RefinancesModal = () => {
  const [rows, setRows] = useState(refinancesData);

  return (
    <Accordion key="Refinances" sx={{ "&.Mui-expanded": { margin: 0 } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>Cash Out Refinances</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <TableCell
                      key={colIndex}
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
                      {cell}
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

export default RefinancesModal;
