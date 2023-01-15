import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryType } from "../../types/type";
type InitialState = {
  favCountries: CountryType[];
  open: boolean;
};
const initialState: InitialState = {
  favCountries: [],

  open: false,
};
const favSlice = createSlice({
  name: "favItem",
  initialState,
  reducers: {
    favaddItem: (state, action: PayloadAction<CountryType>) => {
      state.favCountries.push(action.payload);
    },
    favRemoveItem: (state, action) => {
      const result = state.favCountries.filter(
        (item) => item.name.common !== action.payload
      );
      state.favCountries = result;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const favReducer = favSlice.reducer;
const favactions = favSlice.actions;
export default favactions;
