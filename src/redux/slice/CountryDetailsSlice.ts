import { createSlice } from "@reduxjs/toolkit";
import { CountryType } from "../../types/type";

type InitialState = {
  countryItem: CountryType[];
  isLoading: boolean;
};
const initialState: InitialState = {
  countryItem: [],
  isLoading: false,
};
const countryDetailsSlice = createSlice({
  name: "countryItem",
  initialState,
  reducers: {
    getProdutData: (state, action) => {
      state.countryItem = action.payload;
      state.isLoading = false;
    },
    getProdutDataPending: (state) => {
      state.isLoading = true;
    },
  },
});
export const countryDetailsAction = countryDetailsSlice.actions;

const countrydetailsReducer = countryDetailsSlice.reducer;
export default countrydetailsReducer;
