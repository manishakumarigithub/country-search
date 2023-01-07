import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { CountryType } from "../../types/type";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import favactions from "../../redux/slice/FavoriteCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Fragment } from "react";
import Alert from "@mui/material/Alert";
import "../Product/CountryItem.css";

import Snackbar from "@mui/material/Snackbar";

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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type Props = {
  countryData: CountryType;
};

export default function CountryItem({ countryData }: Props) {
  const [open, setOpen] = React.useState(false);
  const [openOne, setOpenOne] = React.useState(false);
  const [isValid, setisValid] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const getData = useSelector((state: RootState) => state.favItem);
  // const favDispatch = useDispatch();

  let isFavorite = getData.countries.some(
    (item) => item.name.common === countryData.name.common
  );

  const favDispatch = useDispatch();
  function getValue() {
    const isFavoriteItemDuplicate = getData.countries.some(
      (item) =>
        item.name.common.toLocaleLowerCase() ===
        countryData.name.common.toLocaleLowerCase()
    );
    if (isFavoriteItemDuplicate) {
      setisValid(false);
      setOpen(true);
      return;
    } else {
      setisValid(true);
      favDispatch(favactions.favaddItem(countryData));
    }
  }

  {
    /*
     const favdispatch = useDispatch();
  function getValue() {
    if (!isFavoriteItemDuplicate) {
      setOpen(true);
      favdispatch(favactions.favaddItem(countryData));

      //handleClick();
    } else {
      setOpenOne(true);
    }
  */
  }

  return (
    <Fragment>
      <StyledTableRow key={crypto.randomUUID()} className="CountryTable">
        <StyledTableCell component="th" scope="row" className="flag">
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
        <StyledTableCell align="right">
          {countryData.languages ? (
            Object.entries(countryData.languages).map(([key]) => (
              <li key={crypto.randomUUID()}>{countryData.languages[key]}</li>
            ))
          ) : (
            <li>No Languages</li>
          )}
        </StyledTableCell>

        <StyledTableCell>
          <IconButton
            aria-label="add to favorites"
            onClick={getValue}
            sx={{ color: isFavorite ? pink[500] : "bluegray" }}
          >
            <FavoriteIcon />
          </IconButton>

          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Item is already added
            </Alert>
          </Snackbar>

          <Snackbar open={openOne} autoHideDuration={100} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="warning"
              sx={{ width: "100%" }}
            ></Alert>
          </Snackbar>
        </StyledTableCell>
        <StyledTableCell>
          {" "}
          <Link to={`/countries/${countryData.name.common}`}>
            MoreDetails
          </Link>{" "}
        </StyledTableCell>
      </StyledTableRow>
    </Fragment>
  );
}
