import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 450
  }
});

const MyCarousel = (props) => {
  var items = [
    {
      image:
        " https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fGNhcm91c2VsJTIwbW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60.jpg",
      description: "headset3"
    },
    {
      image:
        "https://images.unsplash.com/photo-1575719362347-a70b129740e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGNhcm91c2VsJTIwbW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60.jpg",
      description: "headset1"
    },
    {
      image:
        "https://images.unsplash.com/photo-1557189750-56d1be9e963a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzV8fGNhcm91c2VsJTIwbW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60.jpg",
      description: "headset2"
    }
  ];

  return (
    <Carousel
      interval={4000}
      navButtonsAlwaysVisible={true}
      autoPlay={props.autoPlay}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} component="paper">
      <CardMedia
        className={classes.media}
        image={props.item.image}
        title={props.item.description}
      />
    </Card>
  );
}

export default MyCarousel;
