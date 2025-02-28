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

const titleCategories = [
  { label: "Minimum Unit Count", value: "1" },
  { label: "Max Unit Count", value: "8" },
  { label: "MIN LOAN AMOUNT", value: "$55,000" },
  { label: "MAX LOAN AMOUNT", value: "$2,000,000" },
  { label: "MINIMUM ASSET VALUES", value: "$100,000.00" },
  { label: "Max Acreage Size", value: "10 acres" },
];

const Title = () => {
  const [titleRows, setTitleRows] = useState(titleCategories);
  const [editTitleMode, setEditTitleMode] = useState(false);
  const [editedTitleRows, setEditedTitleRows] = useState([...titleCategories]);
  const [expanded, setExpanded] = useState(false);

  const handleTitleEditClick = (event: React.MouseEvent) => {
    setEditTitleMode(!editTitleMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handleTitleChange = (index: number, value: string) => {
    const newRows = [...editedTitleRows];
    newRows[index].value = value;
    setEditedTitleRows(newRows);
  };

  const handleTitleSave = (event: React.MouseEvent) => {
    setTitleRows([...editedTitleRows]);
    setEditTitleMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="Title"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Title</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={editTitleMode ? handleTitleSave : handleTitleEditClick}
        >
          {editTitleMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {titleRows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index === 5 ? "#ffe6e6" : "#f6fff2",
                  }}
                >
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell sx={{ width: "75%" }}>
                    {editTitleMode ? (
                      <TextField
                        fullWidth
                        value={editedTitleRows[index].value}
                        onChange={(e) =>
                          handleTitleChange(index, e.target.value)
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

export default Title;
