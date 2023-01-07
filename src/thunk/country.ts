import { AppDispatch } from "../store/store";

import { countryAction } from "../redux/slice/CountrySlice";
import { useDispatch } from "react-redux";

const url = "https://restcountries.com/v3.1/all";

export function fetchcountryData() {
  return async (disPatch: AppDispatch) => {
    disPatch(countryAction.getProductDataPending());
    const response = await fetch(url);
    const countryData = await response.json();

    disPatch(countryAction.getProdutData(countryData));
  };
}
