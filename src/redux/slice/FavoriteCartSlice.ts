import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryType } from "../../types/type";
type initialState = {
  favCountries: CountryType[];
};
const initialState: initialState = { favCountries: [] };
const favSlice = createSlice({
  name: "favItem",
  initialState,
  reducers: {
    favaddItem: (state, action: PayloadAction<CountryType>) => {
      state.favCountries.push(action.payload);
    },
  },
});
export const favReducer = favSlice.reducer;
const favactions = favSlice.actions;
export default favactions;
