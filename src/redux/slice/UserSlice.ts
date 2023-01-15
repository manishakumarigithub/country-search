import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  userInput: string;
};
const initialState: InitialState = {
  userInput: "",
};

const userSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    getUserInput: (state, action) => {
      state.userInput = action.payload;
    },
  },
});
export const userAction = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
