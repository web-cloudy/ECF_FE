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
import DocsTypeModal from "./DocsTypeModal";
import LoanTermsModal from "./LoanTermsModal";
import AmortizationModal from "./AmortizationModal";
import PrePaymentModal from "./PrePaymentModal";
import PITIEscrowModal from "./PITIEscrowModal";
import PITIReservesModal from "./PITIReservesModal";
import CostingCostModal from "./CostingCostModal";

const tableBorderRound = {
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
};

const LoanRequirmentsModal = () => {
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
                  fontWeight: "500",
                  backgroundColor: "#FFEAEA",
                }}
              >
                RECOURSE
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  backgroundColor: "#FFEAEA",
                }}
              >
                Full
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
                SELLER CONCESIONS
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  backgroundColor: "#FFEAEA",
                }}
              >
                Yes
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  backgroundColor: "#FFF5DA",
                }}
              >
                Actual Rents
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  backgroundColor: "#FFF5DA",
                }}
              >
                <div style={{ paddingBottom: "8px", fontWeight: "500" }}>
                  Check Box Options for:
                </div>
                <div style={{ paddingLeft: "8px" }}>
                  • Always Use Actual <br />• If FMR is Less - Use 100% of
                  Actual
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  backgroundColor: "#FFF5DA",
                }}
              >
                PROJECTED RENTS (EMPTY)
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  backgroundColor: "#FFF5DA",
                }}
              >
                Yes
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  backgroundColor: "#FFF5DA",
                }}
              >
                Qualifiable Rents
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  backgroundColor: "#FFF5DA",
                }}
              ></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <DocsTypeModal />
      <LoanTermsModal />
      <AmortizationModal />
      <PrePaymentModal />
      <PITIEscrowModal />
      <PITIReservesModal />
      <CostingCostModal />
    </Container>
  );
};

export default LoanRequirmentsModal;
