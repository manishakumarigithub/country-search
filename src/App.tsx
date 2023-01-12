import React from "react";
import "./App.css";

import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Favorite from "./pages/favorite/Favorite";
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import CountryDetails from "./pages/countryDetails/CountryDetails";
import Footer from "./components/footer/Footer";
function App() {
  const fevData = useSelector((state: RootState) => state.favItem.favCountries);
  return (
    <div className="App">
      <Navbar fevItem={fevData}></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/favorite" element={<Favorite></Favorite>}></Route>
        <Route
          path="/countriesDetails/:name"
          element={<CountryDetails />}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
