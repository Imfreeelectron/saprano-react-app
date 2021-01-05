import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import * as constants from "./constant";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    textAlign: "center",
    border: 0,
    borderTop: "3px solid #ddd",
    marginTop: 30,
    borderRadius: 0
  },
  iconMargin: {
    margin: 15
  }
});

export default function Footer(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" component="paper">
      <CardContent>
        <Grid container alignItems="center" spacing={0}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" component="h1" color="secondary">
              {constants.sopranoTitle}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <IconButton aria-label="twitter">
              <TwitterIcon color="secondary" className={classes.iconMargin} />
            </IconButton>
            <IconButton aria-label="facebook">
              <FacebookIcon color="secondary" className={classes.iconMargin} />
            </IconButton>
            <IconButton aria-label="instagram">
              <InstagramIcon color="secondary" className={classes.iconMargin} />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>{constants.copyrightText}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
