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

const DcsrData = [
  [">0.75", "N/A", "N/A"],
  ["0.75 - 0.99", "-5%", "=Max LTV-C490%"],
  ["1.0 - 1.19", "0%", ""],
  ["1.2 - 1.29", "0%", ""],
  ["1.3+", "0%", ""],
];

const DscrModal = () => {
  const [rows, setRows] = useState(DcsrData);

  return (
    <Accordion key="Dscr" sx={{ "&.Mui-expanded": { margin: 0 } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>DSCR(LTV Adjustment)</strong>
        </Typography>
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

export default DscrModal;
