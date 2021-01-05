import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Tab,
  Tabs
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "products",
    href: "/products"
  },
  {
    label: "about Us",
    href: "/about"
  },
  {
    label: "demos",
    href: "/demos"
  },
  {
    label: "Contact Us",
    href: "/contact"
  }
];

const useStyles = makeStyles((theme) => ({
  header: {
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0
    }
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    textAlign: "left"
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  drawerContainer: {
    padding: "20px 30px"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    fontSize: "1.25em"
  }
}));

export default function Header() {
  const {
    header,
    logo,
    toolbar,
    drawerContainer,
    tabContainer,
    tab
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar} disableGutters={true}>
        {sopranoLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{sopranoLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const sopranoLogo = (
    <Button
      color="secondary"
      component={RouterLink}
      to="/"
      onClick={() => setValue(0)}
    >
      <Typography variant="h6" component="h1" className={logo}>
        Soprano
      </Typography>
    </Button>
  );

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getMenuButtons = () => {
    return (
      <Tabs value={value} onChange={handleChange} className={tabContainer}>
        {headersData.map((item, index) => {
          return (
            <Tab
              key={index}
              className={tab}
              component={RouterLink}
              to={item.href}
              label={item.label}
            />
          );
        })}
      </Tabs>
    );
  };

  return (
    <header>
      <AppBar className={header} position="fixed">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
