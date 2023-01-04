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
  //console.log(getdata, "data");
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchcountryData());
  }, [dispatch]);

  const [fiteredproducts, setfilteredproducts] = useState<CountryType[]>([]);
  let result;

  if (!getuserData) {
    result = getData;
  } else {
    result = fiteredproducts;
  }

  const favDispatch = useDispatch();
  //favDispatch(favactions.favaddItem());
  useEffect(() => {
    const fiteredproduct = getData.filter((productItem) =>
      productItem.name.common
        .toLocaleLowerCase()
        .includes(getuserData.toLocaleLowerCase())
    );
    setfilteredproducts(fiteredproduct);
  }, [getuserData, getData]);

  return (
    <div>
      CountryList
      <div>
        <SearchForm></SearchForm>
      </div>
      {/*<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">languages</TableCell>
              <TableCell align="right">s</TableCell>
            </TableRow>
  </TableHead>*/}
      (
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
              <StyledTableCell align="right">F</StyledTableCell>
              <StyledTableCell align="right">D</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {result.map((countryItems) => (
              <CountryItem
                key={crypto.randomUUID()}
                countryData={countryItems}
              />
            ))}

            {/*key={crypto.randomUUID()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/*  <TableCell component="th" scope="row">
                  {<img src={product.flags.png} />}
                </TableCell>
                <TableCell align="right">{product.name.common}</TableCell>
                <TableCell align="right">{product.region}</TableCell>
                <TableCell align="right">{product.population}</TableCell>
                <TableCell align="left">
                  <ul>
                    {product.languages ? (
                      Object.entries(product.languages).map(([key]) => (
                        <li key={key}>{product.languages[key]}</li>
                      ))
                    ) : (
                      <li>No Languages</li>
                    )}
                  </ul>
                </TableCell>

                <TableCell align="right">
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                    </TableCell>*/}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
