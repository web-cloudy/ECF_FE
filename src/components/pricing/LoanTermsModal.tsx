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

const loanTermsData = [
  { label: "30 Year Fixed", value: "" },
  { label: "10/1 ARM", value: "" },
  { label: "5/1 ARM", value: "" },
];

const LoanTermsModal = () => {
  const [loanTermsRows, setLoanTermsRows] = useState(loanTermsData);

  return (
    <Accordion key="LoanTerms" sx={{ "&.Mui-expanded": { margin: 0 } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>Loan Terms Available</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {loanTermsRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell sx={{ width: "5%" }}>
                    <Checkbox sx={{ padding: 0 }} />
                  </TableCell>
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

export default LoanTermsModal;
