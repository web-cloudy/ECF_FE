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
import AIRBNBModal from "./AIRBNBModal";

const tableBorderRound = {
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
};

const BorrowerRequirmentsModal = () => {
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
                }}
              >
                Additional Property Requirements
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  backgroundColor: "#FFEAEA",
                }}
              >
                • New Investors are not eligible
                <br />• Borrowers must have had at least one prior mortgage in
                their
                <br />• past and at least 12 months of property ownership
                experience (Primary counts).
                <br />• No official limit as how far back we can go back.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Min Experiance
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                1
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Owns Primary
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Yes or No (Max LTV/Adjustment to LTV)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Bankrupcty
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Fail
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Foreclosure
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Pass
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  height: "54px",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                  height: "54px",
                }}
              ></TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Mortgage Lates
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                No more than 1 w/in 12 months
              </TableCell>
            </TableRow>
            <TableRow
              sx={{
                backgroundColor: "#FFEAEA",
              }}
            >
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                Refinance
              </TableCell>
              <TableCell
                sx={{
                  padding: 2,
                  fontWeight: "500",
                }}
              >
                anyone 20% or more can be PG
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <AIRBNBModal />
    </Container>
  );
};

export default BorrowerRequirmentsModal;
