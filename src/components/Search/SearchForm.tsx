//react
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

//mui
import TextField from "@mui/material/TextField";
//component
import { userAction } from "../../redux/slice/UserSlice";
import "./SearchForm.css";

export default function SearchForm() {
  //state for userinput
  const [userInputs, setuserInputs] = useState<string>("");

  //function for onchange

  const getDispatch = useDispatch();
  function getValue(event: React.ChangeEvent<HTMLInputElement>) {
    const result = event.target.value;
    setuserInputs(result);

    getDispatch(userAction.getUserInput(userInputs));
  }

  return (
    <div className="Search_Form">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search country..."
          inputProps={{ "aria-label": "Search Products..." }}
          onChange={getValue}
        />
      </Paper>
    </div>
  );
}
