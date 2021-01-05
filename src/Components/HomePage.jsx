import React from "react";
import MyCarousel from "./MyCarousel";
import DescriptionBox from "./DescriptionBox";
import MyButtonWithIcon from "./MyButtonWithIcon";
import CardWithIcons from "./CardWithIcons";
import * as constants from "./constant";
import { makeStyles } from "@material-ui/core/styles";
import CustomDevider from "./CustomDevider";
import { Grid, Typography } from "@material-ui/core";
import UserAvatarCard from "./UserAvatarCard";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: 60
  },
  IconSize: {
    fontSize: 70
  }
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <MyCarousel autoPlay={true} />
          </Grid>

          <DescriptionBox
            title={constants.title1}
            descrition={constants.desc1}
            customVarient={"h4"}
          />
          <Grid item xs={12}>
            <MyButtonWithIcon label={constants.exploreDemosButtonLabel} />
          </Grid>

          <Grid item xs={12}>
            <CustomDevider
              style={{ marginTop: "20px", marginBottom: "20px" }}
            />
          </Grid>

          <DescriptionBox
            title={constants.title2}
            descrition={constants.desc2}
            customVarient={"h5"}
          />
          <Grid item xs={12}>
            <MyCarousel autoPlay={false} />
          </Grid>

          <Grid item xs={12}>
            <CustomDevider
              style={{ marginTop: "40px", marginBottom: "40px" }}
            />
          </Grid>

          <DescriptionBox
            title={constants.title1}
            descrition={constants.desc1}
            customVarient={"h5"}
          />

          <Grid container spacing={3}>
            {constants.iconCardData.map((item, index) => {
              return (
                <Grid item xs={12} sm={4} key={index}>
                  <CardWithIcons
                    title={item.title}
                    paragraph={item.desc}
                    Icon={item.Icon}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <MyButtonWithIcon label={constants.startFreeTrialButtonLabel} />
          </Grid>

          <Grid item xs={12}>
            <CustomDevider
              style={{ marginTop: "20px", marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: 30 }}>
            <Typography variant="h5" component="h1">
              {constants.clientFeedbackTitle}
            </Typography>
          </Grid>

          <Grid container spacing={3}>
            {constants.clientFeedbackData.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <UserAvatarCard
                    alt={item.alt}
                    name={item.name}
                    feedback={item.feedback}
                    src={item.imageURL}
                    elevation={index === 0 ? 8 : 0}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Footer />
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
