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
  MenuItem,
  SelectChangeEvent,
  Select,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const prePaymentData = [
  { label: "5.5.5.5.5", value: "" },
  { label: "5.4.3.2.1", value: "" },
  { label: "3.2.1.", value: "" },
  { label: "2.1", value: "" },
  { label: "3", value: "" },
  { label: "1", value: "" },
];

const PrePaymentModal = () => {
  const [prePaymentRows, setPrePaymentRows] = useState(prePaymentData);

  return (
    <Accordion key="PrePayment" sx={{ "&.Mui-expanded": { margin: 0 } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>Pre Payment Penalty</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {prePaymentRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell sx={{ width: "5%" }}>
                    <Checkbox sx={{ padding: 0 }} />
                  </TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>DO NOT LEND</TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#FAF8E9" }}>
                <TableCell>VISA HOLDERS/FOREIGN NATIONALS</TableCell>
                <TableCell colSpan={2}>Yes</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#FAF8E9" }}>
                <TableCell>(If Yes) Max LTV</TableCell>
                <TableCell colSpan={2}>65%</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#FAF8E9" }}>
                <TableCell>(If Yes) LTV Adjustment</TableCell>
                <TableCell colSpan={2}>-5%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default PrePaymentModal;
