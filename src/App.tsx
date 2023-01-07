import React from "react";
import "./App.css";

import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import CountryDetails from "./pages/CountryDetails";
import Footer from "./components/Footer/Footer";
function App() {
  const fevData = useSelector((state: RootState) => state.favItem.countries);
  return (
    <div className="App">
      <Navbar fevItem={fevData}></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/favorite" element={<Favorite></Favorite>}></Route>
        <Route path="/countries/:name" element={<CountryDetails />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
