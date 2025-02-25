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

const loanTermsData = [
  { label: "30 Year Fixed", value: "" },
  { label: "10/1 ARM", value: "" },
  { label: "5/1 ARM", value: "" },
];

const LoanTerms = () => {
  const [loanTermsRows, setLoanTermsRows] = useState(loanTermsData);
  const [editLoanTermsMode, setEditLoanTermsMode] = useState(false);
  const [editedLoanTermsRows, setEditedLoanTermsRows] = useState([
    ...loanTermsData,
  ]);
  const [expanded, setExpanded] = useState(false);

  const handleLoanTermsEditClick = (event: React.MouseEvent) => {
    setEditLoanTermsMode(!editLoanTermsMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handleLoanTermsChange = (index: number, value: string) => {
    const newRows = [...editedLoanTermsRows];
    newRows[index].value = value;
    setEditedLoanTermsRows(newRows);
  };

  const handleLoanTermsSave = (event: React.MouseEvent) => {
    setLoanTermsRows([...editedLoanTermsRows]);
    setEditLoanTermsMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="LoanTerms"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Loan Terms Available</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={
            editLoanTermsMode ? handleLoanTermsSave : handleLoanTermsEditClick
          }
        >
          {editLoanTermsMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
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
                  <TableCell>
                    {editLoanTermsMode ? (
                      <TextField
                        fullWidth
                        value={editedLoanTermsRows[index].value}
                        onChange={(e) =>
                          handleLoanTermsChange(index, e.target.value)
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

export default LoanTerms;
