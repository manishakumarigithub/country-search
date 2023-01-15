import { createSlice } from "@reduxjs/toolkit";

import { CountryType } from "../../types/type";

type InitialState = {
  country: CountryType[];
  isLoading: boolean;
  Change: boolean;
};
const initialState: InitialState = {
  isLoading: false,
  country: [],
  Change: false,
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
    countryDscending: (state) => {
      state.country.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });
    },
    countryAscending: (state) => {
      state.country.sort((a, b) => {
        if (a.name.common > b.name.common) {
          return -1;
        }
        if (a.name.common < b.name.common) {
          return 1;
        }
        return 0;
      });
    },
    setChange: (state, action) => {
      state.Change = action.payload;
    },
  },
});
export const countryAction = countrySlice.actions;

const countryReducer = countrySlice.reducer;
export default countryReducer;
