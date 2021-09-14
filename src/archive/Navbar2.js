import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import "../css/Navbar.css";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(4),
      marginLeft: theme.spacing(4),
      width: "80%",
    },

    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(10),
      width: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: theme.spacing(30),
      marginLeft: theme.spacing(30),
      width: "25%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
  },
}));

function Navbar2({ setSearchBy }) {
  let history = useHistory();
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState({ search: "" });

  // example search url: myvaccineexprience.org/story/search?q=worth+it
  function handleSubmit(evt) {
    if (evt.key === "Enter") {
      let finalSearch = searchTerm.search.split(" ").join("+");
      setSearchBy(finalSearch);
      history.push(`/story/search`);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSearchTerm((f) => ({
      ...f,
      [name]: value,
    }));
  }
  const { innerWidth } = window;
  console.log(innerWidth);
  return (
    <div className={`Navbar `}>
      <AppBar position="fixed" id="AppBar">
        <Toolbar>
          <Link to="/" id="logo-link">
            <Hidden smDown>
              <Typography variant="inherit" noWrap id="logo">
                MyVaccineExperience.org
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="inherit" noWrap id="logo-small">
                MVE.org
              </Typography>
            </Hidden>
          </Link>

          <div className={classes.search} id="search-area">
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              name="search"
              value={searchTerm.search}
              onChange={handleChange}
              onKeyPress={handleSubmit}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <Link to="/add-story">
            <Button variant="outlined" color="default">
              <Hidden mdDown>Add Story </Hidden>
              <Hidden lgUp id="add-icon">
                New
              </Hidden>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar2;
