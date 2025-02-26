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

const pitiReservesData = [
  { label: "Purchase", value: "0" },
  { label: "Refinance", value: "9" },
];

const PITIReservesModal = () => {
  const [pitiReservesRows, setPITIReservesRows] = useState(pitiReservesData);

  return (
    <Accordion key="PITIReserves" sx={{ "&.Mui-expanded": { margin: 0 } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>PITI Reserves</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {pitiReservesRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default PITIReservesModal;
