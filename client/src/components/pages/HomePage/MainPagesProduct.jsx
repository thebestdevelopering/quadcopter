import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductOne } from "../../../redux/features/productOne";
import {
  fetchProducts,
  removeProducts,
} from "../../../redux/features/products";


const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "gainsboro",
      padding: "0",
    },
  })
);

function MainPagesProduct(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const products = useSelector((state) => state.products.product);

const products = useSelector((state) => state.products.item);
  
  console.log(products)
  useEffect(() => {
    dispatch(fetchProductOne());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(fetchProductOne(id));
  };
  return (
    <div>
      
        return (
          <Grid className={classes.card}>
            {products._id}
            <img src={products.pathImages} alt="" />
            <Link to={products._id} >
            Изменить
            </Link>
            {products.image}
            {products.price}
            {products.category}
            <Grid>
              <button
                onClick={() => {
                  handleDelete(products._id);
                }}
              >
                Удалить
              </button>
            </Grid>
          </Grid>
        );
      )
    </div>
  );
}

export default MainPagesProduct;