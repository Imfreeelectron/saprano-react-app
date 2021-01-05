import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  }
});

export default function CardWithIcons(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} component="paper">
      <CardContent>
        {props.Icon}
        <Typography variant="h5" component="h1">
          {props.title}
        </Typography>

        <Typography variant="body2" component="p">
          {props.paragraph}
        </Typography>
      </CardContent>
    </Card>
  );
}
