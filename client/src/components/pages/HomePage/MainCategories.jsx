import Grid from "@material-ui/core/Grid"; 
import { makeStyles, createStyles } from "@material-ui/core/styles"; 
import { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import { 
  removeCategory, 
  loadCategories, 
} from "../../../redux/features/categories"; 
import { NavLink, useParams } from "react-router-dom"; 
import { fetchProducts } from "../../../redux/features/products"; 
import { fetchProductsCategory } from "../../../redux/features/products"; 
 
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
  const categories = useSelector((state) => state.categories.items); 
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
    <div> 
      {products?.map((item) => { 
        return ( 
          <Grid className={classes.card}> 
            {item._id} 
            <Grid> 
              <NavLink className={classes.link} to={`/product/${item._id}`}> 
                {item.name} 
              </NavLink> 
              <img src={`/${item.pathImages}`} alt="" /> 
              <button>Удалить</button> 
            </Grid> 
          </Grid> 
        ); 
      })} 
    </div> 
  ); 
} 
 
export default MainCategories;