//react
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

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

  function searchHandler() {
    setuserInputs("");
    getDispatch(userAction.getUserInput(userInputs));
  }

  function keyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13) {
      searchHandler();
    }
  }

  return (
    <div className="Search_Form">
      <TextField
        id="standard-search"
        label="please enter country name"
        variant="standard"
        onChange={getValue}
        value={userInputs}
        /* onKeyPress={keyPress} */
        /*  type="search" */
      />
    </div>
  );
}
