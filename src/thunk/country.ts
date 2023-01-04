import { AppDispatch } from "../store/store";

import { countryAction } from "../redux/slice/CountrySlice";

const url = "https://restcountries.com/v3.1/all";

export function fetchcountryData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const countryData = await response.json();

    dispatch(countryAction.getProdutData(countryData));
    // console.log(productdata);
  };
}
