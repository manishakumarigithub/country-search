import React from "react";

//mui
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
//component
import "./Loader.css";

export default function Loder() {
  return (
    <div className="loader">
      {" "}
      <Box sx={{ ml: 0, mt: 0, width: "80%" }}>
        <CircularProgress />
      </Box>{" "}
    </div>
  );
}
