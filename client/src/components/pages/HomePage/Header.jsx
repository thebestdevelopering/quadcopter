import { Container } from "@material-ui/core";
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

    all: {

    },

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
      marginRight: "20px"
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

  const token = useSelector((state) => state.application.token);

  if (!token) {
    return (
      <Container className={classes.cardGrid} maxWidth="100%">
        <Grid container className={classes.all}>
          <Grid item className={classes.head}>
            <h2 className={classes.cardH2}>
              <NavLink to="/">Квадрокоптеры</NavLink>
            </h2>
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
              <ShoppingCartOutlinedIcon className={classes.cart} />

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
          <Grid item className={classes.links}>
            <input
              type="text"
              value={filter}
              onChange={(e) => dispatch(setFilterText(e.target.value))}
            />
            <ShoppingCartOutlinedIcon className={classes.cart} />
            <NavLink className={classes.link} to={"/addproduct"}>
              Личный кабинет
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
