//react
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment } from "react";
//mui
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
//component
import favactions from "../../redux/slice/FavoriteCartSlice";
import { CountryType } from "../../types/type";
import { RootState } from "../../store/store";
import "../Product/CountryItem.css";

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

  const getData = useSelector((state: RootState) => state.favItem);

  let isFavorite = getData.countries.some(
    (item) => item.name.common === countryData.name.common
  );

  const favDispatch = useDispatch();
  function getValue() {
    const isFavoriteItemDuplicate = getData.countries.some(
      (item) => item.name.common === countryData.name.common
    );
    if (isFavoriteItemDuplicate) {
      setOpen(true);
      return;
    } else {
      favDispatch(favactions.favaddItem(countryData));
      alert("item is just added");
    }
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
              severity="warning"
              sx={{ width: "100%" }}
            >
              Item is already added
            </Alert>
          </Snackbar>
        </StyledTableCell>
        <StyledTableCell>
          {" "}
          <Link to={`/countriesDetails/${countryData.name.common}`}>
            MoreDetails
          </Link>{" "}
        </StyledTableCell>
      </StyledTableRow>
    </Fragment>
  );
}
