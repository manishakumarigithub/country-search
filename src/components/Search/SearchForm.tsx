import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/slice/userSlice";
import { RootState } from "../../store/store";

export default function SearchForm() {
  const userInputselector = useSelector(
    (state: RootState) => state.userItem.userInput
  );
  // console.log(userInputselector, "this");
  const usedispatch = useDispatch();
  function getValue(event: React.ChangeEvent<HTMLInputElement>) {
    const result = event.target.value;
    //console.log(result, "ggg");
    usedispatch(userAction.getUserInput(result));
  }

  return (
    <div>
      searchForm //
      <TextField
        id="standard-search"
        label="please enter country name"
        variant="standard"
        onChange={getValue}
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
