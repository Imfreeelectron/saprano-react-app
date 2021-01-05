import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  divider: {
    background: "#ddd",
    height: 3,
    width: "75%",
    margin: "auto"
  }
}));

export default function CustomDevider(props) {
  const classes = useStyles();

  return (
    <Divider
      light
      style={props.style}
      classes={{ root: classes.divider }}
      orientation={props.orientation}
    />
  );
}
