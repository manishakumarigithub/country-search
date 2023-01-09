//react
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//mui

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//component
import { RootState } from "../store/store";
import { fetchcountryDetails } from "../thunk/Countrydetails";
import "./Country.css";
import { countryDetailsAction } from "../redux/slice/CountryDetailsSlice";
import "../components/Loader/Loader";
import Loder from "../components/Loader/Loader";

export default function CountryDetails() {
  const { name } = useParams();
  // console.log(name, "name");

  const Apiurl = "https://restcountries.com/v3.1/name/" + name;

  const getData = useSelector(
    (state: RootState) => state.countryDetails.countryItem
  );
  const isLoad = useSelector(
    (state: RootState) => state.countryDetails.isLoading
  );
  const dispatchData = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatchData(fetchcountryDetails(Apiurl));
    dispatchData(countryDetailsAction.getProdutDataPending());
  }, [dispatchData, Apiurl]);
  //console.log(getData, "data");

  return (
    <div className="Details">
      {isLoad ? <Loder></Loder> : ""}
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {getData[0].name.common[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={getData[0].name.common}
          subheader={getData[0].capital}
        />
        <CardMedia
          component="img"
          height="194"
          image={getData[0].flags.png}
          alt="image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <li>
              Name:<strong>{getData[0].name.common}</strong>
            </li>
            <li>
              Capital:<strong>{getData[0].capital}</strong>
            </li>
            <li>
              {" "}
              Region:<strong>{getData[0].region}</strong>
            </li>
            <li>
              Population:<strong>{getData[0].population}</strong>
            </li>

            <li>
              languages:
              <strong>
                {getData[0].languages ? (
                  Object.entries(getData[0].languages).map(([key]) => (
                    <li key={crypto.randomUUID()}>
                      {getData[0].languages[key]}
                    </li>
                  ))
                ) : (
                  <li>No Languages</li>
                )}
              </strong>
            </li>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
