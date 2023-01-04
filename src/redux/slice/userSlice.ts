import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  userInput: string;
};
const initialState: initialState = {
  userInput: "",
};

const userSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    getUserInput: (state, action) => {
      // console.log(action.payload, "action");
      state.userInput = action.payload;
    },
  },
});
export const userAction = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
