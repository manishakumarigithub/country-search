import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryType } from "../../types/type";

type initialState = {
  country: CountryType[];
  isLoading: boolean;
};
const initialState: initialState = {
  isLoading: false,
  country: [],
};

const countrySlice = createSlice({
  name: "countryItem",
  initialState,
  reducers: {
    getProdutData: (state, action) => {
      state.country = action.payload;

      state.isLoading = false;
    },
    getProductDataPending: (state) => {
      state.isLoading = true;
    },
  },
});
export const countryAction = countrySlice.actions;

const countryReducer = countrySlice.reducer;
export default countryReducer;
