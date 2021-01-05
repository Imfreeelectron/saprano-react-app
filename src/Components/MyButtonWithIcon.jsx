import React from "react";
import { Chip, Grid } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function MyButtonWithIcon(props) {
  const handleForward = () => {
    console.info("You clicked the forward icon.");
  };

  return (
    <Grid style={{ textAlign: "center" }}>
      <Chip
        label={props.label}
        clickable
        color="secondary"
        onDelete={handleForward}
        deleteIcon={<ArrowForwardIcon />}
      />
    </Grid>
  );
}
