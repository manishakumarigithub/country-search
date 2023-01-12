import React from "react";
//mui
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Fragment } from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
//component
import { CountryType } from "../../types/type";
import { useDispatch } from "react-redux";
import favactions from "../../redux/slice/FavoriteCartSlice";

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type Props = {
  favData: CountryType;
};

export default function FavoriteList({ favData }: Props) {
  const [open, setOpen] = useState(false);

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

  ///logic remove
  const dispatchFav = useDispatch();
  const handleRemove = (name: string) => {
    dispatchFav(favactions.favRemoveItem(name));
    setOpen(true);
  };

  return (
    <Fragment>
      <StyledTableRow key={crypto.randomUUID()} className="CountryTable">
        <StyledTableCell component="th" scope="row">
          <img
            src={favData.flags.png}
            alt={favData.name.common}
            className="flagImage"
          ></img>
        </StyledTableCell>
        <StyledTableCell align="right">{favData.name.common}</StyledTableCell>
        <StyledTableCell align="right">{favData.region}</StyledTableCell>
        <StyledTableCell align="right">{favData.population}</StyledTableCell>
        <StyledTableCell align="right">
          {favData.languages ? (
            Object.entries(favData.languages).map(([key]) => (
              <li key={key}>{favData.languages[key]}</li>
            ))
          ) : (
            <li>No Languages</li>
          )}
        </StyledTableCell>

        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert severity="warning" sx={{ width: "100%" }}>
            removed
          </Alert>
        </Snackbar>

        <StyledTableCell align="right">
          <button onClick={() => handleRemove(favData.name.common)}>
            Remove
          </button>
        </StyledTableCell>
      </StyledTableRow>
    </Fragment>
  );
}
