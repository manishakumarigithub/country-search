import React from "react";
import "./App.css";

import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import Footer from "./components/Footer/Footer";
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
