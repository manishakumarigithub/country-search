import { AppDispatch } from "../store/store";
import { countryDetailsAction } from "../redux/slice/CountryDetailsSlice";

//const url = "https://restcountries.com/v3.1/name/" + name.name;

export function fetchcountryDetails(url: string) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const countryData = await response.json();

    dispatch(countryDetailsAction.getProdutData(countryData));
  };
}
