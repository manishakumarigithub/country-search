import React from "react";
//mui
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Fragment } from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
//component
import { CountryType } from "../../types/type";
import { useDispatch, useSelector } from "react-redux";
import favactions from "../../redux/slice/FavoriteCartSlice";
import { RootState } from "../../store/store";

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
  const dispatchFav = useDispatch();
  const [favRemove, setFavremove] = useState<boolean>(false);

  const favRemoveHandleclick = () => {
    setFavremove(true);
  };
  //logic for snackbar
  const open = useSelector((state: RootState) => state.favItem.open);

  const handleClick = () => {
    dispatchFav(favactions.setOpen(true));
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    //setOpen(false);
    dispatchFav(favactions.setOpen(false));
  };

  ///logic remove

  function handleRemove() {
    dispatchFav(favactions.favRemoveItem(favData.name.common));
    favRemoveHandleclick();
    handleClick();
  }

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

        <StyledTableCell align="right">
          <Button variant="contained" onClick={handleRemove}>
            Remove
          </Button>
        </StyledTableCell>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            severity="success"
            sx={{ width: "100%" }}
            onClose={handleClose}
          >
            item removed
          </Alert>
        </Snackbar>
      </StyledTableRow>
    </Fragment>
  );
}
