//react
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
//mui
import TextField from "@mui/material/TextField";
//component
import { userAction } from "../../redux/slice/UserSlice";
import "./SearchForm.css";

export default function SearchForm() {
  const [userInputs, setuserInputs] = useState<string>("");
  const getData = useSelector((state: RootState) => state.countryItem.country);
  function refresh() {
    return getData;
  }
  const getDispatch = useDispatch();
  function getValue(event: React.ChangeEvent<HTMLInputElement>) {
    const result = event.target.value;
    setuserInputs(result);

    getDispatch(userAction.getUserInput(userInputs));

    refresh();
  }

  return (
    <div className="Search_Form">
      <TextField
        id="standard-search"
        label="please enter country name"
        variant="standard"
        onChange={getValue}
        value={userInputs}
        type="search"
      />
    </div>
  );
}
