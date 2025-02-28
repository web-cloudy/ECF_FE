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

const seasoningCategories = [
  { label: "Cash Out", value: "6 Months" },
  { label: "Rate and Term", value: "3 Months" },
];

const Seasoning = () => {
  const [seasoningRows, setSeasoningRows] = useState(seasoningCategories);
  const [editSeasoningMode, setEditSeasoningMode] = useState(false);
  const [editedSeasoningRows, setEditedSeasoningRows] = useState([
    ...seasoningCategories,
  ]);
  const [expanded, setExpanded] = useState(false);

  const handleSeasoningEditClick = (event: React.MouseEvent) => {
    setEditSeasoningMode(!editSeasoningMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handleSeasoningChange = (index: number, value: string) => {
    const newRows = [...editedSeasoningRows];
    newRows[index].value = value;
    setEditedSeasoningRows(newRows);
  };

  const handleSeasoningSave = (event: React.MouseEvent) => {
    setSeasoningRows([...editedSeasoningRows]);
    setEditSeasoningMode(false);
    event.stopPropagation();
  };

  return (
    <Accordion
      key="Seasoning"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Seasoning Requirements</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={
            editSeasoningMode ? handleSeasoningSave : handleSeasoningEditClick
          }
        >
          {editSeasoningMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {seasoningRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell>
                    {editSeasoningMode ? (
                      <TextField
                        fullWidth
                        value={editedSeasoningRows[index].value}
                        onChange={(e) =>
                          handleSeasoningChange(index, e.target.value)
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

export default Seasoning;
