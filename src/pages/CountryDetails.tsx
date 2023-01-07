import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchcountryDetails } from "../thunk/countrydetails";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CountryDetails() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const name = useParams();
  const Apiurl = "https://restcountries.com/v3.1/name/" + name.name;

  const getData = useSelector(
    (state: RootState) => state.countrydetails.countryItem
  );
  const usedispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    usedispatch(fetchcountryDetails(Apiurl));
  }, [usedispatch]);

  //console.log(url, "para");
  //console.log(name);
  console.log(getData[0], "hi");
  return (
    <div>
      {/* <img src={getData[0].flags.png}></img>
      <p>{getData[0].name.common}</p>
  <h1>{getData[0].population}</h1>*/}

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
                    <li key={crypto.randomUUID()}>{getData[0].languages[key]}</li>
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
