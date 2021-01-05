import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    textAlign: "center",
    border: 0
  }
});

export default function DescriptionBox(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant={props.customVarient} component="h1">
          {props.title}
        </Typography>

        <Typography variant="body2" component="p">
          {props.descrition}
        </Typography>
      </CardContent>
    </Card>
  );
}
