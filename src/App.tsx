import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

import { Route, Routes } from "react-router";
import Home from "./pages/country/Country";
import Favorite from "./pages/favorite/Favorite";
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import CountryDetails from "./pages/countryDetails/CountryDetails";
import Footer from "./components/footer/Footer";
import Country from "./pages/home1/Home";
import { createAbstractBuilder } from "typescript";

function App() {
  const [isTheme, setIsTheme] = useState<boolean>(false);
  const [userInputs, setuserInputs] = useState<string>("");
  const theme = createTheme({
    palette: { mode: isTheme ? "dark" : "light" },
  });

  const changethemeToggle = () => {
    setIsTheme(!isTheme);
  };

  const fevData = useSelector((state: RootState) => state.favItem.favCountries);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar fevItem={fevData} changeTheme={changethemeToggle}></Navbar>

        <Routes>
          <Route path="" element={<Country></Country>}></Route>
          <Route path="/favorite" element={<Favorite></Favorite>}></Route>
          <Route
            path="/countriesDetails/:name"
            element={<CountryDetails />}
          ></Route>
          <Route path="/country" element={<Home></Home>}></Route>
        </Routes>

        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
