import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import * as constants from "./constant";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: 60
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14)
  }
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Card component="paper">
        <CardContent>
          <Grid container alignItems="center" spacing={0}>
            <Grid item xs={12} sm={6}>
              <Avatar
                alt="Rinku Kumar"
                src="https://lh3.googleusercontent.com/ogw/ADGmqu_nWVHnDOGsRPl8Ub-dAq8VYMdSuYy3QSM5M7jmYbs=s64-c-mo"
                className={classes.large}
                style={{ margin: "auto" }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container alignItems="center" spacing={0}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="h1">
                    {constants.myName}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    {constants.aboutMeText}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
}
