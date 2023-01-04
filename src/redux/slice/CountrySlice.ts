import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryType } from "../../types/type";
type initialState = {
  country: CountryType[];
};
const initialState: initialState = {
  country: [],
};

const countrySlice = createSlice({
  name: "countryItem",
  initialState,
  reducers: {
    getProdutData: (state, action) => {
      // console.log(action.payload, "action");
      state.country = action.payload;
    },
  },
});
export const countryAction = countrySlice.actions;

const countryReducer = countrySlice.reducer;
export default countryReducer;
