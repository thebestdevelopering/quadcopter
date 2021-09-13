import {
  Container,
  Select,
  FormControl,
  MenuItem,
  Typography,
  InputLabel,
  NativeSelect,
  withStyles
} from "@material-ui/core";
import React from "react";
import { alpha, makeStyles, createStyles } from "@material-ui/core/styles";
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

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

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
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#E6EDF2",
      ginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "0ch",
        "&:focus": {
          width: "20ch",
        },
      },
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
              <NavLink to="/">Квадрокоптер</NavLink>
            </h2>
              <Typography align="center"></Typography>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">
                  КАТЕГОРИИ
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={category}
                  onChange={handleAddCategory}
                  input={<BootstrapInput />}
                >
                  {categories.map((item) => (
                    <MenuItem key={item.value} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </NativeSelect>
                </FormControl>
                
            <Grid item className={classes.links}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
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
              </div>
              <ShoppingCartOutlinedIcon className={classes.cart} to="/sss" />

              <NavLink className={classes.link} to={"/signin"}>
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
          <Paper>
            <Typography align="center"></Typography>
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
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
          </div>
          <ShoppingCartOutlinedIcon className={classes.cart} to="/sss" />
          <NavLink className={classes.link} to={"/addproduct"}>
            Личный кабинет
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
