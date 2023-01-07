import React from "react";
import { CountryType } from "../../types/type";
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
  favData: CountryType;
};

export default function FavIist({ favData }: Props) {
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
      </StyledTableRow>
    </Fragment>
  );
}
