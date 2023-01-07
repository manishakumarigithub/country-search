import React from "react";
import CountryList from "../components/Product/CountryList";
import Loader from "../components/Loader/Loader";
import { countryAction } from "../redux/slice/CountrySlice";
import { AppDispatch, RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  //console.log(isLoading, "loading from Home");
  return (
    <div>
      <CountryList></CountryList>
    </div>
  );
}
