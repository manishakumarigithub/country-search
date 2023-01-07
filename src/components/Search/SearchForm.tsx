//react
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
//mui
import TextField from "@mui/material/TextField";
//component
import { userAction } from "../../redux/slice/userSlice";
import "./SearchForm.css";

export default function SearchForm() {
  const [userInputs, setuserInputs] = useState<string>("");

  const getDispatch = useDispatch();
  function getValue(event: React.ChangeEvent<HTMLInputElement>) {
    const result = event.target.value;
    setuserInputs(result);

    getDispatch(userAction.getUserInput(userInputs));
  }

  return (
    <div className="Search_Form">
      <TextField
        id="standard-search"
        label="please enter country name"
        variant="standard"
        onChange={getValue}
        value={userInputs}
      />
    </div>
  );
}
