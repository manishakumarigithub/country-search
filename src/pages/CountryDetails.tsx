import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchcountryDetails } from "../thunk/countrydetails";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
export default function CountryDetails() {
  const name = useParams();
  const Apiurl = "https://restcountries.com/v3.1/name/" + name.name;

  const getData = useSelector(
    (state: RootState) => state.countrydetails.countryItem
  );
  const usedispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    usedispatch(fetchcountryDetails(Apiurl));
  }, [usedispatch]);

  //console.log(url, "para");
  //console.log(name);
  console.log(getData, "hi");
  return (
    <div>
      <img src={getData[0].flags.png}></img>
      <p>{getData[0].name.common}</p>
      <h1>{getData[0].population}</h1>
      <p></p>
    </div>
  );
}
