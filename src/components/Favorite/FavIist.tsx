import React from "react";
import { CountryType } from "../../types/type";
type Props = {
  favData: CountryType;
};

export default function FavIist({ favData }: Props) {
  return (
    <div>
      FavIist
      <p> {favData.name.common}</p>
      <img src={favData.flags.png}></img>
    </div>
  );
}
