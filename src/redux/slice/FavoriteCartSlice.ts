import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryType } from "../../types/type";

const countryItem: CountryType[] =
  localStorage.getItem("country") !== null
    ? JSON.parse(localStorage.getItem("country")!)
    : [];

type InitialState = {
  favCountries: CountryType[];
  open: boolean;
};
const initialState: InitialState = {
  favCountries: countryItem,

  open: false,
};
const favSlice = createSlice({
  name: "favItem",
  initialState,
  reducers: {
    favaddItem: (state, action: PayloadAction<CountryType>) => {
      if (
        state.favCountries.find(
          (item) => item.name.common === action.payload.name.common
        )
      ) {
        return;
      } else {
        state.favCountries.push(action.payload);
        localStorage.setItem(
          "country",
          JSON.stringify(state.favCountries.map((item: CountryType) => item))
        );
      }
    },

    favRemoveItem: (state, action: PayloadAction<CountryType>) => {
      const index = state.favCountries.findIndex(
        (item) => item.name.common === action.payload.name.common
      );

      if (index === -1) {
        return;
      } else {
        const result = state.favCountries.filter(
          (item: CountryType) => item.name.common !== action.payload.name.common
        );
        state.favCountries = result;
        localStorage.setItem(
          "country",
          JSON.stringify(state.favCountries.map((item: CountryType) => item))
        );
      }
    },

    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const favReducer = favSlice.reducer;
const favactions = favSlice.actions;
export default favactions;
