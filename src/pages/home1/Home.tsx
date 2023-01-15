import React from "react";
import "./Home.css";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <p>Welcome!</p>
      <p>explore the world</p>
      <Link to="/country" className="button">
        {" "}
        <Button variant="contained">Here</Button>{" "}
      </Link>
    </div>
  );
}
