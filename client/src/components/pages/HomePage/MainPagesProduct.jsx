// import Grid from "@material-ui/core/Grid";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchProductOne } from "../../../redux/features/productOne";
// import {
//   fetchProducts,
//   removeProducts,
// } from "../../../redux/features/products";
// import { useState } from "react";


// const useStyles = makeStyles((theme) =>
//   createStyles({
//     card: {
//       backgroundColor: "gainsboro",
//       padding: "0",
//     },
//   })
// );

// function MainPagesProduct(props) {
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   // const products = useSelector((state) => state.products.product);
//   useEffect(() => {
//     dispatch(fetchProductOne());
//   }, [dispatch]);

//   const products = useSelector((state) => state.products.product);
//   const [items, setItems] = useState([]);

//   console.log(products)

//   useEffect(() => {
//     fetch("http://localhost:4000/product/6138cadcb9cfd68164ffa9e5")
//       .then(res => res.json())
//       .then(
//         (result) => {
//         ;
//           setItems(result);
//         },
//         // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
//         // чтобы не перехватывать исключения из ошибок в самих компонентах.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

   
 
//   return (
//     <div>
//       {items?.map((item,index) => {
//         return (
//           <Grid className={classes.card}>
//             {item._id}
//             <img src={item.pathImages} alt="" />
//             <Link to={item._id} >
//             Изменить
//             </Link>
//             {item.image}
//             {item.name}
//             {item.price}
//             {item.category}
//             <Grid>
//               <button
//                 onClick={() => {
//                   handleDelete(item._id);
//                 }}
//               >
//                 Удалить
//               </button>
//             </Grid>
//           </Grid>
//         );
//       })}
//     </div>
//   );
// }

// export default MainPagesProduct;
