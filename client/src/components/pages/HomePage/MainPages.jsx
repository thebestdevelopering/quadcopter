import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProducts } from "../../../redux/features/products";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "gainsboro",
      padding: "0",
    },
    img: {
      width: "300px",
    },

    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    reklImg: {
      width: "600px",
    },
    reklText: {
      width: "600px",
      
    },
    reklBlock:{
      width:"1200px",
      display:"flex",
      margin: "auto",
      
      
    }
    
  })
);

function MainPages(props) {
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

  console.log(products);

  const handleDelete = (id) => {
    dispatch(removeProducts(id));
  };
  return (
  <>
    <div  className={classes.reklBlock}>
      <div className={classes.reklText}><h1 t= {140}>КВАДРОКОПТЕР XIRO XPLORER V</h1>
      <p> Встречайте один из самых крутых дронов для съемки видео — Xiro Xplorer V. Этот коптер, вобрал в себя самые передовые технологии и инновации, оставив всех своих конкурентов далеко позади. В арсенале квадрокоптера внушительная камера с качеством съемки 1080P Full HD, которая установлена на бесколлекторный 3-х осевой подвес. Дрон оснащен трансляцией видео на смартфон и очень широким функционалом по пилотированию. Конечно же в арсенале квадрокоптера вы найдете спутниковую навигацию для точного удержания позиции и возврата домой. А теперь рассмотрим все подробнее, поехали:</p></div>
      <div>
        <img
          className={classes.reklImg}
          src="https://img.tttcdn.com/product/xy/2000/2000/p/gu1/R/S/RM6694US/RM6694US-1-cb49-CRqb.jpg"
          alt=""
        />
      </div>
      </div>
      <Card spacing={5} className={classes.root}>
        <Box>
          <Box></Box>
        </Box>
        {products?.map((item, index) => {
          return (
            <CardActionArea>
              <CardMedia className={classes.media} image={item.pathImages} />
              <ShoppingCartOutlinedIcon />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
              </CardContent>
              {item.price}
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  name="simple-controlled"

                  // value={value}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  //}}
                />
              </Box>

              <Link to="/editproduct">Изменить</Link>

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
            </CardActionArea>
          );
        })}
      </Card>
    
    </>
  );
}

export default MainPages;
