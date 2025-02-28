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
import PurchaseRateTermModal from "./PurchaseRateTermModal";
import RefinancesModal from "./RefinancesModal";
import DscrModal from "./DscrModal";

const tableBorderRound = {
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
};

const LeverageModal = () => {
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
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                MIN CREDIT SCORE
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontSize: "1rem",
                  fontWeight: "500",
                  backgroundColor: "#dff2d8",
                }}
              >
                680
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <PurchaseRateTermModal />
      <RefinancesModal />
      <DscrModal />
    </Container>
  );
};

export default LeverageModal;
