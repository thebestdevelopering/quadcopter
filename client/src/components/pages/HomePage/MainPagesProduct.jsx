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
 
  return ( 
    <> 
      {product.map((item) => { 
        if (item._id === id) { 
          return ( 
            <CardActionArea> 
              <div> 
                <img 
                  src="https://avatars.mds.yandex.net/get-mpic/4866352/img_id646375391527644035.jpeg/13hq" 
                  alt="" 
                /> 
 
                <CardContent> 
                  <Typography gutterBottom variant="h5" component="h2"> 
                    {item.name} 
                  </Typography> 
                  {item.price} 
                  <ShoppingCartOutlinedIcon /> 
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
                </CardContent> 
              </div> 
            </CardActionArea> 
          ); 
        } 
      })} 
    </> 
  ); 
} 
 
export default MainPagesProduct;