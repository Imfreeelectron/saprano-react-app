import { createMuiTheme } from "@material-ui/core/styles";

const myBlue = "#fff";
const mySec = "#b088f9";

//  #0B72B9
export default createMuiTheme({
  palette: {
    common: {
      blue: `${myBlue}`,
      orange: `${mySec}`
    },
    primary: {
      main: `${myBlue}`
    },
    secondary: {
      main: `${mySec}`
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff"
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "black"
    },
    estimate: {
      fontSize: "1rem",
      fontFamily: "Pacifico",
      textTransform: "none",
      color: "black"
    }
  }
});
