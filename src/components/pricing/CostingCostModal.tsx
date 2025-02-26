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

const costingCostData = [
  { label: "Underwriting Fee", value: "$1,495" },
  { label: "Processing Fee", value: "$995" },
  { label: "Max Points", value: "6%" },
  { label: "Attorney Fee", value: "$1,200" },
  { label: "Misc Cost", value: "" },
];

const CostingCostModal = () => {
  const [costingCostRows, setCostingCostRows] = useState(costingCostData);

  return (
    <Accordion key="CostingCost" sx={{ "&.Mui-expanded": { margin: 0 } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <strong>COSTING COST</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {costingCostRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "25%" }}>{row.label}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  sx={{
                    height: "54px",
                  }}
                ></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    height: "54px",
                  }}
                ></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    padding: 2,
                    fontWeight: "500",
                    backgroundColor: "#FFEAEA",
                  }}
                >
                  Max Assignment Fee
                </TableCell>
                <TableCell
                  sx={{
                    padding: 2,
                    fontWeight: "500",
                    backgroundColor: "#FFEAEA",
                  }}
                >
                  20%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    height: "54px",
                  }}
                ></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    padding: 2,
                    fontWeight: "500",
                  }}
                >
                  Lend to individual or entity.
                </TableCell>
                <TableCell
                  sx={{
                    padding: 2,
                    fontWeight: "500",
                    backgroundColor: "#C7E7C1",
                  }}
                >
                  Entity only
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    padding: 2,
                    fontWeight: "500",
                    backgroundColor: "#FFEAEA",
                  }}
                >
                  Entity Seasoning
                </TableCell>
                <TableCell
                  sx={{
                    padding: 2,
                    fontWeight: "500",
                    backgroundColor: "#FFEAEA",
                  }}
                >
                  6 Months
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    padding: 2,
                    fontWeight: "500",
                    backgroundColor: "#FFEAEA",
                  }}
                >
                  Rural - Guidelines
                </TableCell>
                <TableCell
                  sx={{
                    padding: 2,
                    fontWeight: "500",
                    backgroundColor: "#FFEAEA",
                  }}
                >
                  No
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default CostingCostModal;
