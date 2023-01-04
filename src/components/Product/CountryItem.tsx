import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { CountryType } from "../../types/type";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteItem from "../Favorite/FavoriteItem";
import favactions from "../../redux/slice/FavoriteCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { pink } from "@mui/material/colors";

import { styled } from "@mui/material/styles";

import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";

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

type Props = {
  countryData: CountryType;
};

export default function CountryItem({ countryData }: Props) {
  const getdata = useSelector((state: RootState) => state.favItem);

  const favdispatch = useDispatch();
  function getValue() {
    favdispatch(favactions.favaddItem(countryData));
  }

  let isFavorite = getdata.countries.some(
    (item) => item.name.common === countryData.name.common
  );

  return (
    <div>
      <Fragment>
        <StyledTableRow key={crypto.randomUUID()} className="CountryTable">
          <StyledTableCell component="th" scope="row">
            <img
              src={countryData.flags.png}
              alt={countryData.name.common}
              className="flagImage"
            ></img>
          </StyledTableCell>
          <StyledTableCell align="right">
            {countryData.name.common}
          </StyledTableCell>
          <StyledTableCell align="right">{countryData.region}</StyledTableCell>
          <StyledTableCell align="right">
            {countryData.population}
          </StyledTableCell>
          <StyledTableCell align="left">
            <ul>
              {countryData.languages ? (
                Object.entries(countryData.languages).map(([key]) => (
                  <li key={key}>{countryData.languages[key]}</li>
                ))
              ) : (
                <li>No Languages</li>
              )}
            </ul>
          </StyledTableCell>
          <StyledTableCell>
            {" "}
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                onClick={getValue}
                sx={{ color: isFavorite ? pink[500] : "primary" }}
              />
            </IconButton>
          </StyledTableCell>
          <StyledTableCell>
            {" "}
            <Link to={`/countries/${countryData.name.common}`}>
              MoreDetails
            </Link>{" "}
          </StyledTableCell>
        </StyledTableRow>
      </Fragment>
    </div>
  );
}
