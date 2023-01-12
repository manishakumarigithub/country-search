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
import Loader from "../loader/Loader";
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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Tooltip, IconButton } from "@mui/material";

//mui function
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 17,
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
  const dispatchNorm = useDispatch;
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

  if (getuserData === "") {
    result = getData;
    //console.log(result, "1");
  } else {
    result = fiteredProducts;
  }

  //sorting mathod
  function countryDscendOrder() {
    disPatch(countryAction.countryDscending());
  }
  function countryAscenOrder() {
    disPatch(countryAction.countryAscending());
  }

  return (
    <div>
      {isLoad ? <Loader></Loader> : ""}
      <div>
        <SearchForm></SearchForm>
      </div>
      <TableContainer component={Paper} className="table">
        <Table
          sx={{ minWidth: 100 }}
          size="small"
          aria-label="a dense table"
          className="table"
        >
          <TableHead className=".table thead">
            <TableRow>
              <StyledTableCell className="flag" align="center">
                Flag
              </StyledTableCell>
              <StyledTableCell align="center">
                Name{" "}
                <IconButton onClick={countryDscendOrder}>
                  <ArrowDownwardIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={countryAscenOrder}>
                  <ArrowUpwardIcon fontSize="small" />
                </IconButton>
              </StyledTableCell>
              {/* <StyledTableCell align="right">Name</StyledTableCell> */}
              <StyledTableCell align="center">Region</StyledTableCell>
              <StyledTableCell align="center">Population</StyledTableCell>

              <StyledTableCell align="center">Languages</StyledTableCell>

              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
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
