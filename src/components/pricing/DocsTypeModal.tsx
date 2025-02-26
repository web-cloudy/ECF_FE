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

const docsTypeData = [
  { label: "DOC TYPE FULL", value: "" },
  { label: "DOC TYPE LITE", value: "" },
  { label: "NO DOC", value: "" },
  { label: "12 Months Bank Statments", value: "" },
  { label: "2 Years Tax Returns", value: "" },
];

const DocsTypeModal = () => {
  const [docsTypesRows, setDocsTypesRows] = useState(docsTypeData);

  return (
    <Accordion key="DocsTypes" sx={{ "&.Mui-expanded": { margin: 0 } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>Docs Types</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {docsTypesRows.map((row, index) => (
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

export default DocsTypeModal;
