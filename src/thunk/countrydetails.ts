import { AppDispatch } from "../store/store";
import { countryDetailsAction } from "../redux/slice/CountryDetailsSlice";
//url wor
export function fetchcountryDetails(url: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(countryDetailsAction.getProdutDataPending());
    const response = await fetch(url);
    const countryData = await response.json();

    dispatch(countryDetailsAction.getProdutData(countryData));
  };
}
