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

const docsTypeData = [
  { label: "DOC TYPE FULL", value: "" },
  { label: "DOC TYPE LITE", value: "" },
  { label: "NO DOC", value: "" },
  { label: "12 Months Bank Statments", value: "" },
  { label: "2 Years Tax Returns", value: "" },
];

const DocsType = () => {
  const [docsTypesRows, setDocsTypesRows] = useState(docsTypeData);
  const [editDocsTypesMode, setEditDocsTypesMode] = useState(false);
  const [editedDocsTypesRows, setEditedDocsTypesRows] = useState([
    ...docsTypeData,
  ]);
  const [expanded, setExpanded] = useState(false);

  const handleDocsTypesEditClick = (event: React.MouseEvent) => {
    setEditDocsTypesMode(!editDocsTypesMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handleDocsTypesChange = (index: number, value: string) => {
    const newRows = [...editedDocsTypesRows];
    newRows[index].value = value;
    setEditedDocsTypesRows(newRows);
  };

  const handleDocsTypesSave = (event: React.MouseEvent) => {
    setDocsTypesRows([...editedDocsTypesRows]);
    setEditDocsTypesMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="DocsTypes"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Docs Types</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={
            editDocsTypesMode ? handleDocsTypesSave : handleDocsTypesEditClick
          }
        >
          {editDocsTypesMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
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
                  <TableCell>
                    {editDocsTypesMode ? (
                      <TextField
                        fullWidth
                        value={editedDocsTypesRows[index].value}
                        onChange={(e) =>
                          handleDocsTypesChange(index, e.target.value)
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

export default DocsType;
