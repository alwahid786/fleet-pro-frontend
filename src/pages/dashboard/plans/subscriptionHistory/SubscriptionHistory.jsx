import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import DownloadIcon from "../../../../assets/svgs/plans/DownloadIcon";

const SubscriptionHistory = () => {
  const createData = (date, plan, amount, status, invoice) => {
    return {date, plan, amount, status, invoice};
  };

  const headCells = ["DATE", "PLAN", "AMOUNT", "STATUS", "INVOICE"];

  const rows = [
    createData(
      "24 June 2024",
      "standard",
      "$19.99",
      "ACTIVE",
      <DownloadIcon />
    ),
    createData(
      "24 June 2024",
      "standard",
      "$19.99",
      "EXPIRED",
      <DownloadIcon />
    ),
    createData(
      "24 June 2024",
      "standard",
      "$19.99",
      "EXPIRED",
      <DownloadIcon />
    ),
    createData(
      "24 June 2024",
      "standard",
      "$19.99",
      "EXPIRED",
      <DownloadIcon />
    ),
  ];

  return (
    <TableBox>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((cell, i) => (
              <TableCell align="center" key={i}>
                <TypographyOne sx={{color: 'rgba(17, 17, 17, 1)', fontWeight: 600}}>{cell}</TypographyOne>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((tableRow, i) => (
            <TableRow key={i}>
              <TableCell align="center"><TypographyOne>{tableRow.date}</TypographyOne></TableCell>
              <TableCell align="center"><TypographyOne>{tableRow.plan}</TypographyOne></TableCell>
              <TableCell align="center"><TypographyOne>{tableRow.amount}</TypographyOne></TableCell>
              <TableCell align="center">
                <TypographyOne sx={{
                  borderRadius: '8px',
                  background: tableRow.status === 'ACTIVE' ? 'rgba(80, 212, 80, 1)' : 'rgba(255, 0, 0, 1)',
                  color: tableRow.status === 'ACTIVE' ? '#000' : '#fff',
                  fontWeight: tableRow.status === 'ACTIVE' ? 600 : 400,
                  display: 'inline',
                  padding: '8px 15px'
                }}>
                  {tableRow.status}
                </TypographyOne>
              </TableCell>
              <TableCell align="center"><TypographyOne sx={{cursor: 'pointer'}}>{tableRow.invoice}</TypographyOne></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableBox>
  );
};

export default SubscriptionHistory;

const TypographyOne = styled(Typography)({
  fontSize: "16px",
  color: "rgba(17, 17, 17, 0.6)",
});

const TableBox = styled(Box)({
  background: "#fff",
  borderRadius: "24px 24px 0 0",
  marginTop: "-4rem",
  height: "100%",
  padding: '30px 0'
});
