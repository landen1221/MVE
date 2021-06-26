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

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(10),
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto",
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar({ setSearchBy }) {
  let history = useHistory();
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState({ search: "" });

  // example search url: myvaccineexprience.org/story/search?q=worth+it
  function handleSubmit(evt) {
    console.log(evt.key);
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

  return (
    <div className={`Navbar ${classes.grow}`}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <Typography variant="inherit" noWrap id="logo">
              MyVaccineExperience.org
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
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
              Add Story
            </Button>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
