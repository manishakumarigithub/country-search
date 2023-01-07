import React from "react";
//component
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <Link to="">
          {" "}
          <button className="back">back to home</button>{" "}
        </Link>

        <Link to="/favorite">
          {" "}
          <button className="next">Next</button>
        </Link>
      </div>{" "}
    </div>
  );
}
