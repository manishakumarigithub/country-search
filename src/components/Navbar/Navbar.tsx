import React from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import Favorite from "../../pages/Favorite";
import Badge from "@mui/material/Badge";
import { CountryType } from "../../types/type";
import { useSelector } from "react-redux";
type props = {
  fevItem: CountryType[];
};

export default function Navbar({ fevItem }: props) {
  const favItemlength = fevItem.length;

  return (
    <div>
      Navbar
      <Link to=""> home</Link>
      <Link to="/favorite">
        {" "}
        fav
        <strong>
          Favorite
          <Badge badgeContent={favItemlength} color="secondary"></Badge>
        </strong>
      </Link>
    </div>
  );
}
