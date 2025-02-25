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
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const prePaymentData = [
  { label: "5.5.5.5.5", value: "" },
  { label: "5.4.3.2.1", value: "" },
  { label: "3.2.1.", value: "" },
  { label: "2.1", value: "" },
  { label: "3", value: "" },
  { label: "1", value: "" },
];

const PrePayment = () => {
  const [prePaymentRows, setPrePaymentRows] = useState(prePaymentData);
  const [editPrePaymentMode, setEditPrePaymentMode] = useState(false);
  const [editedPrePaymentRows, setEditedPrePaymentRows] = useState([
    ...prePaymentData,
  ]);
  const [expanded, setExpanded] = useState(false);

  const handlePrePaymentEditClick = (event: React.MouseEvent) => {
    setEditPrePaymentMode(!editPrePaymentMode);
    event.stopPropagation();
    setExpanded(true);
  };

  const handlePrePaymentChange = (index: number, value: string) => {
    const newRows = [...editedPrePaymentRows];
    newRows[index].value = value;
    setEditedPrePaymentRows(newRows);
  };

  const handlePrePaymentSave = (event: React.MouseEvent) => {
    setPrePaymentRows([...editedPrePaymentRows]);
    setEditPrePaymentMode(false);
    event.stopPropagation();
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Accordion
      key="PrePayment"
      sx={{ "&.Mui-expanded": { margin: 0 } }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <strong>Pre Payment Penalty</strong>
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={
            editPrePaymentMode
              ? handlePrePaymentSave
              : handlePrePaymentEditClick
          }
        >
          {editPrePaymentMode ? <CheckIcon /> : <EditIcon />}
        </IconButton>
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
                  <TableCell>
                    {editPrePaymentMode ? (
                      <TextField
                        fullWidth
                        value={editedPrePaymentRows[index].value}
                        onChange={(e) =>
                          handlePrePaymentChange(index, e.target.value)
                        }
                      />
                    ) : (
                      row.value
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>DO NOT LEND</TableCell>
                <TableCell colSpan={2}>
                  <Select
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: 2,
                      width: "40%",
                    }}
                    renderValue={(selected) =>
                      selected ? (
                        selected
                      ) : (
                        <Typography color="gray">Choose</Typography>
                      )
                    }
                  >
                    <MenuItem value="" disabled>
                      Choose
                    </MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                  </Select>
                </TableCell>
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

export default PrePayment;
