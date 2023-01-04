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

  const getdata = useSelector(
    (state: RootState) => state.countrydetails.countryItem
  );
  const usedispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    usedispatch(fetchcountryDetails(Apiurl));
  }, [usedispatch]);

  //console.log(url, "para");
  //console.log(name);
  //console.log(getdata, "hi");
  return (
    <div>
      <h1>{getdata[0]?.name.common}</h1>
    </div>
  );
}
