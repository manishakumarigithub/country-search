import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/slice/userSlice";
import { RootState } from "../../store/store";
import { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
  const [userInputs, setuserInputs] = useState<string>("");

  const usedispatch = useDispatch();
  function getValue(event: React.ChangeEvent<HTMLInputElement>) {
    const result = event.target.value;
    setuserInputs(result);
    //console.log(result, "ggg");
    usedispatch(userAction.getUserInput(userInputs));
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
      {/*<form>
        <label>
          search item by name
          <input type="text" onChange={getValue}></input>
        </label>
</form>*/}
    </div>
  );
}
