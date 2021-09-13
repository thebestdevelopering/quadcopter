import {
  Container,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  Input,
} from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import { setFilterText } from "../../../redux/features/products";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useEffect } from "react";
import { loadCategories } from "../../../redux/features/categories";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardGrid: {
      backgroundColor: "white",
      padding: "0",
    },

    head: {
      width: "100%",
      height: "90px",
      background: " #e5e5e5",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    all: {},

    cardH2: {
      color: "black",
      textDecoration: "none",
      marginLeft: "50px",
    },

    links: {
      color: "white",
      width: "400px",
      display: "flex",
      justifyContent: "space-around",
    },

    link: {
      marginTop: "5px",
      color: "black",
      textDecoration: "none",
      marginRight: "20px",
    },
    cart: {
      color: "black",
    },
    select: {
      display: "flex",
      alignItems: "baseline",
      width: "140px",
    },
    selectus: {
      marginLeft: "10px",
      color: "black",
    },
    sel: {
      marginRight: "110px",
      width: "140px",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#E6EDF2",
      ginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
        maxWidth: "200px",
      },
    },
    searchIcon: {
      color: "black",
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
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "0ch",
        "&:focus": {
          width: "20ch",
          paddingRight: "110px",
        },
      },
    },
    nav: {
      width: "500px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  })
);

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.products.filter);
  const categories = useSelector((state) => state.categories.items);

  const token = useSelector((state) => state.application.token);
  const [category, setCategory] = useState("");

  const handleAddCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (!token) {
    return (
      <Container className={classes.cardGrid} maxWidth="100%">
        <Grid container className={classes.all}>
          <Grid item className={classes.head}>
            <h2 className={classes.cardH2}>
              <NavLink to="/">Квадрокоптеры</NavLink>
            </h2>
            <Paper>
              <InputLabel id="demo-customized-select-label">
                КАТЕГОРИИ
              </InputLabel>
              <FormControl>
                <Select
                  value={category}
                  onChange={handleAddCategory}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {categories.map((item) => (
                    <MenuItem key={item.value} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
            <Grid className={classes.nav}>
              <Box className={classes.search}>
                <Box className={classes.searchIcon}>
                  <SearchIcon />
                </Box>

                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  value={filter}
                  onChange={(e) => dispatch(setFilterText(e.target.value))}
                />
              </Box>
              <ShoppingCartOutlinedIcon className={classes.cart} to="/sss" />
              <NavLink className={classes.link} to={"/singin"}>
                <AccountCircleOutlinedIcon />
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
  return (
    <Container className={classes.cardGrid} maxWidth="100%">
      <Grid container className={classes.all}>
        <Grid item className={classes.head}>
          <h2>
            <NavLink className={classes.cardH2} to="/">
              Квадрокоптеры
            </NavLink>
          </h2>
          <Paper className={classes.select}>
            <FormControl>
              <InputLabel
                id="demo-controlled-open-select"
                className={classes.selectus}
              >
                КАТЕГОРИИ
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={category}
                onChange={handleAddCategory}
                className={classes.sel}
              >
                {categories.map((item) => (
                  <MenuItem key={item.value} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
          <Grid className={classes.nav}>
            <Box className={classes.search}>
              <Box className={classes.searchIcon}>
                <SearchIcon />
              </Box>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={filter}
                onChange={(e) => dispatch(setFilterText(e.target.value))}
              />
            </Box>
            <ShoppingCartOutlinedIcon className={classes.cart} to="/sss" />
            <NavLink className={classes.link} to={"/addproduct"}>
              <AccountCircleOutlinedIcon />
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
