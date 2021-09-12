import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { removeProducts } from "../../../redux/features/products";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "gainsboro",
      padding: "0",
    },
  })
);

function MainPages() {
  const dispatch = useDispatch();
  const classes = useStyles();

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

  const handleDelete = (id) => {
    dispatch(removeProducts(id));
  };

  return (
    <div>
      {products?.map((item) => {
        return (
          <Grid className={classes.card}>
            <img src={item.pathImages} alt="" />
            {item.name}
            {item.image}
            {item.price}
            {item.description}
            {item.category}
            <Grid>
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
      })}
    </div>
  );
}

export default MainPages;
