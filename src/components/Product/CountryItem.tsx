import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { CountryType } from "../../types/type";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
import MuiAlert, { AlertProps } from "@mui/material/Alert";

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

  const getdata = useSelector((state: RootState) => state.favItem);

  const favdispatch = useDispatch();
  function getValue() {
    favdispatch(favactions.favaddItem(countryData));
    handleClick();
  }

  let isFavorite = getdata.countries.some(
    (item) => item.name.common === countryData.name.common
  );

  return (
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
        <StyledTableCell align="right">
          {countryData.languages ? (
            Object.entries(countryData.languages).map(([key]) => (
              <li key={key}>{countryData.languages[key]}</li>
            ))
          ) : (
            <li>No Languages</li>
          )}
        </StyledTableCell>

        <StyledTableCell>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              A country just added to the favorite page
            </Alert>
          </Snackbar>
          <IconButton
            aria-label="add to favorites"
            onClick={getValue}
            sx={{ color: isFavorite ? pink[500] : "primary" }}
          >
            <FavoriteIcon />
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
  );
}
