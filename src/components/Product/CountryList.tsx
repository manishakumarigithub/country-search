import React from "react";
import { useSelector } from "react-redux";
import { fetchcountryData } from "../../thunk/country";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import CountryItem from "./CountryItem";
import { AppDispatch, RootState } from "../../store/store";
import { CountryType, MyLanguages } from "../../types/type";
import { useState } from "react";
import { countryAction } from "../../redux/slice/CountrySlice";
import SearchForm from "../Search/SearchForm";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  Flag: string,
  Name: string,
  Region: string,
  Population: number,
  languages: MyLanguages
) {
  return { Flag, Name, Region, Population, languages };
}

//let favoriteArray[]:CountryType;

export default function CountryList() {
  const getData = useSelector((state: RootState) => state.countryItem.country);
  const getuserData = useSelector(
    (state: RootState) => state.userItem.userInput
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchcountryData());
  }, [dispatch]);

  const [fiteredProducts, setfilteredProducts] = useState<CountryType[]>([]);
  let result;

  if (!getuserData) {
    result = getData;
  } else {
    result = fiteredProducts;
  }

  useEffect(() => {
    const fiteredproduct = getData.filter((productItem) =>
      productItem.name.common
        .toLocaleLowerCase()
        .includes(getuserData.toLocaleLowerCase())
    );
    setfilteredProducts(fiteredproduct);
  }, [getuserData, getData]);

  return (
    <div>
      CountryList
      <div>
        <SearchForm></SearchForm>
      </div>
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
            {result.slice(1, 30).map((countryItems) => (
              <CountryItem
                key={crypto.randomUUID()}
                countryData={countryItems}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
