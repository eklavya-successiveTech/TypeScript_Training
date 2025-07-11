"use client";

import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TableSortLabel, TablePagination
} from "@mui/material";
import { UserData } from "@/types"; // adjust path based on your folder

const userData: UserData[] = [
  { id: 1, name: "John", age: 25, email: "j@gmail.com" },
  { id: 2, name: "Nayan", age: 30, email: "nayan@gmail.com" },
  { id: 3, name: "Kavita", age: 22, email: "kavita@gmail.com" },
  { id: 4, name: "Dhariya", age: 28, email: "ddhariya@gmail.com" },
];

const DataTable = () => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof UserData>("name");
  const [page, setPage] = useState<number>(0);
  const rowsPerPage = 2;

  const handleSort = (property: keyof UserData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const sortedData = [...userData].sort((a, b) => {
    const valA = a[orderBy];
    const valB = b[orderBy];
    if (typeof valA === "number" && typeof valB === "number") {
      return order === "asc" ? valA - valB : valB - valA;
    }
    return order === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper elevation={3} sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["name", "age"].map((key) => (
                <TableCell key={key}>
                  <TableSortLabel
                    active={orderBy === key}
                    direction={orderBy === key ? order : "asc"}
                    onClick={() => handleSort(key as keyof UserData)}
                  >
                    <strong>{key.toUpperCase()}</strong>
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell><strong>Email</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={userData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]} // fixed rowsPerPage
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default DataTable;
