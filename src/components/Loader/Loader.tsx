import React from "react";
import "../Loader/Loader.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import ClipLoader from "react-spinners/ClipLoader";

export default function Loder() {
  return (
    <div className="loader">
      {" "}
      <Box sx={{ ml: 70, mt: 10, width: "80%" }}>
        <CircularProgress />
      </Box>{" "}
    </div>
  );
}
