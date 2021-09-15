import {
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  fetchProducts,
  removeProducts,
} from "../../../redux/features/products";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Rating from "@material-ui/lab/Rating";
import Header from "./Header";
import EditProduct from "../ProfilePages/EditProduct";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "gainsboro",
      padding: "0",
    },
    all: {
      display: "flex",
    },
    content: {
      display: "flex",
    },
    img: {
      width: "500px",
    },
    info: {
      marginTop: "50px",
      marginLeft: "50px",
    },
    name: {
      fontSize: "28px",
    },
    price: {
      fontSize: "21px",
      fontWeight: "600"
    },
  })
);

function MainPagesProduct(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const product = useSelector((state) => {
    return state.products.product;
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeProducts(id));
  };

  //   /*{`/${item.pathImages}`}*/ для изобр
  return (
    <>
      <Header />
      <br />
      {product.map((item) => {
        if (item._id === id) {
          return (
            <Grid>
              <Grid className={classes.all}>
                <Grid className={classes.content}>
                  <img
                    src={`/${item.pathImages}`}
                    alt=""
                    className={classes.img}
                  />
                </Grid>
                <Grid className={classes.info}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.name}
                  >
                    {item.name}
                  </Typography>
                  <Typography className={classes.price}>
                    {item.price} ₽
                  </Typography>
                  <Typography className={classes.description}>
                    {item.description}
                  </Typography>
                  <ShoppingCartOutlinedIcon />
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="simple-controlled" />
                  </Box>
                </Grid>
              </Grid>
              <Link to="/editproduct">Изменить</Link>

              {/* {item.category} */}
              <Grid>
                <NavLink to={`/product/${item._id}`}></NavLink>

                <button
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  Удалить
                </button>
              </Grid>
            </Grid>
          );
        }
      })}
    </>
  );
}

export default MainPagesProduct;
