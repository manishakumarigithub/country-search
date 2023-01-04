import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FavIist from "./FavIist";
export default function FavoriteItem() {
  const favItems = useSelector((state: RootState) => state.favItem.countries);

  return (
    <div>
      <div>
        {favItems.map((items) => (
          <FavIist key={crypto.randomUUID()} favData={items} />
        ))}
      </div>
    </div>
  );
}
