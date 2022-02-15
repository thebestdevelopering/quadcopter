import { Typography, Box, Grid, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import {
  fetchProducts,
  removeProducts,
} from '../../../redux/features/products';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Rating from '@material-ui/lab/Rating';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: 'gainsboro',
      padding: '0',
    },
    media: {
      width: '100%',
      padding: '0px',
    },

    all: {
      display: 'flex',
    },
    content: {
      display: 'flex',
    },
    img: {
      width: '500px',
    },
    info: {
      marginTop: '50px',
      marginLeft: '50px',
    },
    name: {
      fontSize: '28px',
    },
    price: {
      fontSize: '21px',
      fontWeight: '600',
    },
    del: {
      marginTop: '20px',
    },
  })
);

function MainPagesProduct() {
  let data = JSON.parse(localStorage.getItem('products'));
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeProducts(id));
  };

  const handleAddProductBasket = (item) => {
    data.push(item);
    localStorage.setItem('products', JSON.stringify(data));
  };

  return (
    <Grid className={classes.container}>
      <Header />
      {product?.map((item) => {
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
              <Button
                variant="contained"
                color="primary"
                className={classes.btns}
                onClick={() => {
                  handleAddProductBasket(item);
                }}
              >
                Купить
              </Button>
              <Link to={`/edit/${item._id}`}>Изменить</Link>
              <Grid className={classes.del}>
                <NavLink to={`/product/${item._id}`}></NavLink>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  Удалить
                </Button>
              </Grid>
            </Grid>
          );
        }
      })}
      <Footer />
    </Grid>
  );
}

export default MainPagesProduct;
