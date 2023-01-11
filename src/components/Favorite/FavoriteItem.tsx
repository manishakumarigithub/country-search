import React from "react";
//component
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FavoriteList from "../Favorite/FavoriteList";

//mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

//mui function
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function FavoriteItem() {
  //favStore
  const favItems = useSelector(
    (state: RootState) => state.favItem.favCountries
  );

  return (
    <div>
      <div></div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 800 }}
          aria-label="customized table"
          className="CountryTable"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Flag</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Region</StyledTableCell>
              <StyledTableCell align="right">Population</StyledTableCell>

              <StyledTableCell align="right">Languages</StyledTableCell>

              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {favItems.map((items) => (
              <FavoriteList key={crypto.randomUUID()} favData={items} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
