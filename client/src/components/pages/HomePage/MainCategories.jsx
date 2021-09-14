import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../../redux/features/categories";
import { NavLink, useParams } from "react-router-dom";

import { fetchProductsCategory } from "../../../redux/features/products";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "gainsboro",
      padding: "0",
    },
  })
);

function MainCategories(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const products = useSelector((state) => {
    return state.products.product;
  });
  

  useEffect(() => {
    dispatch(fetchProductsCategory(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  //   const handleDelete = (id) => {
  //     dispatch(removeCategory(id));
  //   };
  return (
    <Card spacing={5} className={classes.root}>
      {products?.map((item) => {
        return (
          <Grid className={classes.content}>
            <Grid className={classes.info}>
              <NavLink to={`/product/edit/${item._id}`}>
                <CardMedia className={classes.media} image={item.pathImages} />
                <img src={`/${item.pathImages}`} />
              </NavLink>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.productname}
                >
                  {item.name}
                </Typography>
              </CardContent>
              <Box className={classes.productinfo}>{item.price} P</Box>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              className={classes.btns}
            >
              Купить
            </Button>
            <Grid></Grid>
          </Grid>
        );
      })}
    </Card>
  );
}

export default MainCategories;
