import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Checkbox,
  Button,
  Pagination,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SmsIcon from "@mui/icons-material/Sms";
import EmailIcon from "@mui/icons-material/Email";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LinkIcon from "@mui/icons-material/Link";
import { TableData } from "./TableData";

const ListStyle: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage: number = 10;
  const totalPages: number = Math.ceil(TableData.length / rowsPerPage);
  const [toggledRow, setToggledRow] = useState<number | null>(null);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleButtonClick = (index: number) => {
    setToggledRow((prev) => (prev === index ? null : index));
  };

  return (
    <div className="pt-8">
      <div className="overflow-x-auto">
        <TableContainer component={Paper}>
          <Table className="border border-gray-200">
            <TableHead className="bg-[#c99a3d]">
              <TableRow>
                <TableCell>
                  <Checkbox />
                  ID
                </TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Loan File</TableCell>
                <TableCell>Term Sheet</TableCell>
                <TableCell>Draws</TableCell>
                <TableCell>Related To</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Borrow name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TableData.slice(
                (page - 1) * rowsPerPage,
                page * rowsPerPage
              ).map((row, index) => (
                <TableRow key={index} className="hover:bg-red-50">
                  <TableCell>
                    <Checkbox />
                    {row.id}
                  </TableCell>
                  <TableCell>{row.dueDate}</TableCell>
                  <TableCell>
                    <IconButton>
                      <InsertDriveFileIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    {row.loanFile ? (
                      <IconButton>
                        <LinkIcon className="text-blue-500" />
                      </IconButton>
                    ) : (
                      <></>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.termSheet ? (
                      <IconButton>
                        <LinkIcon className="text-blue-500" />
                      </IconButton>
                    ) : (
                      <></>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.draws ? (
                      <IconButton>
                        <LinkIcon className="text-blue-500" />
                      </IconButton>
                    ) : (
                      <></>
                    )}
                  </TableCell>
                  <TableCell>{row.relatedTo}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.borrowerName}</TableCell>
                  <TableCell>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      {row.status.active}
                    </span>{" "}
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                      {row.status.servicing}
                    </span>
                  </TableCell>
                  <TableCell className="text-yellow-600 font-semibold">
                    {toggledRow === index ? (
                      <div style={{ paddingLeft: "4px" }}>
                        <IconButton>
                          <CallIcon sx={{ color: "green" }} />
                        </IconButton>
                        <IconButton>
                          <SmsIcon sx={{ color: "green" }} />
                        </IconButton>
                        <IconButton>
                          <EmailIcon sx={{ color: "green" }} />
                        </IconButton>
                      </div>
                    ) : (
                      <Button
                        sx={{ textTransform: "none", paddingX: 5 }}
                        onClick={() => handleButtonClick(index)}
                      >
                        {row.action}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="flex justify-between mt-4 items-center">
        <div className="pl-2 text-sm text-gray-400">
          Page {page} of {totalPages}
        </div>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="standard"
        />
      </div>
    </div>
  );
};

export default ListStyle;
