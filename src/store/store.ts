import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../redux/slice/CountrySlice";
import { favReducer } from "../redux/slice/FavoriteCartSlice";
import userReducer from "../redux/slice/UserSlice";
import countrydetailsReducer from "../redux/slice/CountryDetailsSlice";
const store = configureStore({
  reducer: {
    countryItem: countryReducer,
    favItem: favReducer,
    userItem: userReducer,
    countryDetails: countrydetailsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
