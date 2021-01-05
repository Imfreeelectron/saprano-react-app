import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center"
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  paperBorder: {
    border: "1px solid #b088f9"
  }
}));

export default function UserAvatarCard(props) {
  const classes = useStyles();

  return (
    <Paper elevation={props.elevation} className={classes.paperBorder}>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Avatar
                alt={props.alt}
                src={props.src}
                className={classes.large}
              />
            </Grid>
            <Grid item xs={6} style={{ margin: "auto" }}>
              <Typography variant="h5" component="h1">
                {props.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" component="p">
                {props.feedback}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
}
