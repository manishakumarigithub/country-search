import React from "react";
import FavoriteItem from "../components/Favorite/FavoriteItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
export default function Favorite() {
  const countData = useSelector(
    (state: RootState) => state.countryItem.country
  );

  return (
    <div>
      <FavoriteItem></FavoriteItem>
    </div>
  );
}
