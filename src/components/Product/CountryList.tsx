//react
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
//component
import { fetchcountryData } from "../../thunk/Country";

import CountryItem from "./CountryItem";
import { AppDispatch, RootState } from "../../store/store";
import { CountryType } from "../../types/type";
import SearchForm from "../Search/SearchForm";
import Loader from "../Loader/Loader";
import "./CountryList.css";
import { countryAction } from "../../redux/slice/CountrySlice";

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

export default function CountryList() {
  //countrylist store
  const getData = useSelector((state: RootState) => state.countryItem.country);
  //country loading function
  const isLoad = useSelector((state: RootState) => state.countryItem.isLoading);
  //userinput store
  const getuserData = useSelector(
    (state: RootState) => state.userItem.userInput
  );
  //country list fetching function
  const disPatch = useDispatch<AppDispatch>();
  useEffect(() => {
    disPatch(fetchcountryData());
    disPatch(countryAction.getProductDataPending());
  }, [disPatch]);
  //state for filtered data
  const [fiteredProducts, setfilteredProducts] = useState<CountryType[]>([]);
  let result;

  useEffect(() => {
    const fiteredProduct = getData.filter((productItem) =>
      productItem.name.common
        .toLocaleLowerCase()
        .includes(getuserData.toLocaleLowerCase())
    );
    setfilteredProducts(fiteredProduct);
  }, [getuserData, getData]);
  //display conditions
  //result = getData;
  if (getuserData === "") {
    result = getData;
    //console.log(result, "1");
  } else {
    result = fiteredProducts;
  }

  return (
    <div>
      CountryList
      {isLoad ? <Loader></Loader> : ""}
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
              <StyledTableCell className="flag">Flag</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Region</StyledTableCell>
              <StyledTableCell align="right">Population</StyledTableCell>

              <StyledTableCell align="right">Languages</StyledTableCell>

              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody className="table-body">
            {result.map((countryItems) => (
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
