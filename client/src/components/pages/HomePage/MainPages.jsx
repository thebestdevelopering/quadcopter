import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  MenuItem,
  Button,
} from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProducts } from "../../../redux/features/products";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useEffect } from "react";
import { loadCategories } from "../../../redux/features/categories";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "300px",
    },

    root: {
      maxWidth: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      margin: "0px 100px",
      boxShadow: "none",
    },
    media: {
      height: 140,
    },
    reklImg: {
      width: "600px",
    },
    reklText: {
      width: "600px",
      marginTop: "100px",
    },
    reklBlock: {
      width: "1200px",
      display: "flex",
      margin: "auto",
    },

    content: {
      width: "300px",
      marginBottom: "50px",
      border: "1px solid #FAFAFA",
      alignContent: "center",
    },

    productinfo: {
      marginLeft: "15px",
      fontSize: "20px",
    },

    buy: {
      marginLeft: "17px",
    },

    h2: {
      marginBottom: "0px",
    },
    t: {
      fontFamily: "Hind Siliguri",
    },
    firstbrand: {
      color: "#C72535",
      fontFamily: "Hind Siliguri",
    },
    fbname: {
      fontSize: "61px",
      lineHeight: "1.4",
    },
    fbnameline: {
      fontSize: "61px",
      color: "#247CC0",
      background: "#E9F2F9",
      display: "inline",
      padding: "0px 10px",
    },
    /* Vector */

// position: absolute;
// left: 17.57%;
// right: 81.97%;
// top: 0.67%;
// bottom: 99.19%;

// /* p */
// background: #247CC0;

    fbinfo: {
      marginTop: "20px",
      fontFamily: "Hind Siliguri",
      color: "#030D15",
      opacity: "90%",
    },

    fbpricesale: {
      display: "flex",
      alignItems: "baseline",
    },
    btn: {
      marginTop: "30px",
      padding: "12px 25px",
      fontSize: "20px",
    },

    btn: {
      marginTop: "10px",
      padding: "12px 15px",
      fontSize: "16px",
    },
    fbsale: {
      fontSize: "20px",
      display: "inline",
      marginLeft: "35px",
    },
    fbprice: {
      fontSize: "20px",
      display: "inline",
      marginLeft: "18px",
      textDecoration: "line-through",
      color: "#030D15",
      opacity: "50%",
    },
    allbrand: {
      color: "#C72535",
      fontFamily: "Hind Siliguri",
      textAlign: "center",
    },
    allbrands: {
      color: "black",
      fontFamily: "Hind Siliguri",
      textAlign: "center",
      fontSize: "30px",
      fontWeight: "600"
    },
  })
);

function MainPages() {
  const dispatch = useDispatch();
  const classes = useStyles();

  // const categories = useSelector((state) => state.categories.items);
  const products = useSelector((state) => {
    const { products } = state;

    if (products.filter === "") {
      return products.product;
    }

    return products.product.filter((item) => {
      console.log(products);
      return item.name.toLowerCase().includes(products.filter.toLowerCase());
    });
  });

  console.log(products);

  const handleDelete = (id) => {
    dispatch(removeProducts(id));
  };

  // useEffect(() => {
  //   dispatch(loadCategories());
  // }, [dispatch]);
  return (
    <>
      <div className={classes.reklBlock}>
        <div className={classes.reklText}>
          <Typography className={classes.firstbrand}>
            FAVORITE BRANDS
          </Typography>
          <Typography className={classes.fbname}>
            <Typography className={classes.fbnameline}>
              {" "}
              XIRO XPLORER V
            </Typography>{" "}
            1080P Full HD
          </Typography>
          <Typography className={classes.fbinfo}>
            {" "}
            Встречайте один из самых крутых дронов для съемки видео — Xiro
            Xplorer V. Этот коптер, вобрал в себя самые передовые технологии и
            инновации, оставив всех своих конкурентов далеко позади.
          </Typography>
          <Grid className={classes.fbpricesale}>
            <Button variant="contained" color="primary" className={classes.btn}>
              Купить
            </Button>

            <Typography className={classes.fbsale}>
              $ 249.90{" "}
              <Typography className={classes.fbprice}>$ 249.99</Typography>
            </Typography>
          </Grid>
        </div>
        <div>
          <img
            className={classes.reklImg}
            src="https://img.tttcdn.com/product/xy/2000/2000/p/gu1/R/S/RM6694US/RM6694US-1-cb49-CRqb.jpg"
            alt=""
          />
        </div>
      </div>
      <Grid>
      <Typography className={classes.allbrand}>
            NEW PRODUCTS
          </Typography>
      <Typography  className={classes.allbrands}>
        POPULAR PRODUCTS
      </Typography>
        <Card spacing={5} className={classes.root}>
          {products?.map((item) => {
            return (
              <div className={classes.content}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.pathImages}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                  </CardContent>
                  <Box className={classes.productinfo}>{item.price}</Box>

                  <Button variant="contained" color="primary" className={classes.btns}>
              Купить
            </Button>
                  <Typography>
                    {/* <Typography>
                      {categories?.map((items) => {
                      return (
                      {items.name})
                    })} */}
                    {/* </Typography> */}
                  </Typography>
                  <Grid>
                    {/* <button
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Удалить
                    </button> */}
                  </Grid>
                </CardActionArea>
              </div>
            );
          })}
        </Card>
      </Grid>
    </>
  );
}

export default MainPages;
