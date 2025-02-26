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

const airbnbData = [
  { label: "label", value: "value" },
  { label: "label", value: "value" },
  { label: "label", value: "value" },
  { label: "label", value: "value" },
  { label: "label", value: "value" },
];

const AIRBNBModal = () => {
  const [airbnbRows, setAIRBNBRows] = useState(airbnbData);

  return (
    <Accordion key="AIRBNB" sx={{ "&.Mui-expanded": { margin: 0 } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>AIRBNB</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {airbnbRows.map((row, index) => (
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

export default AIRBNBModal;
