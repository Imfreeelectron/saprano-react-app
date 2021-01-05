import React from "react";
import Header from "./Components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Components/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/AboutMe";

const useStyles = makeStyles((theme) => ({
  root: {}
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={() => <div>Products</div>} />
            <Route path="/about" component={AboutMe} />
            <Route path="/demos" component={() => <div>demos</div>} />
            <Route path="/contact" component={() => <div>Contact Us</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
