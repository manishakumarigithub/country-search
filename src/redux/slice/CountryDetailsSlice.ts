import { createSlice } from "@reduxjs/toolkit";
import { CountryType } from "../../types/type";

type initialState = {
  countryItem: CountryType[];
};
const initialState: initialState = {
  countryItem: [],
};
const countryDetailsSlice = createSlice({
  name: "countryItem",
  initialState,
  reducers: {
    getProdutData: (state, action) => {
      state.countryItem = action.payload;
    },
  },
});
export const countryDetailsAction = countryDetailsSlice.actions;

const countrydetailsReducer = countryDetailsSlice.reducer;
export default countrydetailsReducer;
