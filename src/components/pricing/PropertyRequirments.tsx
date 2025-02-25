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
import Title from "./TItle";
import Occupancy from "./Occupancy";
import Seasoning from "./Seasoning";
import Ecfm from "./Ecfm";

const tableBorderRound = {
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
};

const PropertyRequirments = () => {
  return (
    <Container maxWidth={false}>
      <TableContainer sx={tableBorderRound}>
        <Table>
          <TableHead>
            <TableCell
              sx={{
                backgroundColor: "#c99a3d",
                color: "white",
                padding: 2,
                width: "25%",
                borderRight: "1px solid white",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              Program Name
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#c99a3d",
                color: "white",
                padding: 2,
                width: "75%",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              ECFM
            </TableCell>
          </TableHead>
        </Table>
      </TableContainer>
      <Ecfm />
      <Title />
      <Occupancy />
      <Seasoning />
    </Container>
  );
};

export default PropertyRequirments;
