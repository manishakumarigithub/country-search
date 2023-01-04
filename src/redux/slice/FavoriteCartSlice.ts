import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryType } from "../../types/type";
type initialState = {
  countries: CountryType[];
};
const initialState: initialState = { countries: [] };
const favSlice = createSlice({
  name: "favItem",
  initialState,
  reducers: {
    favaddItem: (state, action: PayloadAction<CountryType>) => {
      //console.log(action.payload, "action.payload");

      state.countries.push(action.payload);
    },
  },
});
export const favReducer = favSlice.reducer;
const favactions = favSlice.actions;
export default favactions;
