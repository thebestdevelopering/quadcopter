// import { useDispatch, useSelector } from "react-redux";
// import React, { useEffect, useState } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { productByCategories } from "../../../redux/features/products";

// function Categories() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.product);
//   useEffect(
//     (id) => {
//       dispatch(productByCategories());
//     },
//     [dispatch, id]
//   );
//   return (
//     <div>
//       {products?.map((item) => {
//         return (
//           <div>
//             <NavLink to={`/category/${item._id}`}> {item.title} </NavLink>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Categories;













// let Products = () => {
//     const [array, setArray] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     const { products } = useSelector((state) => state.products);

//     const fetchData = async () => {
//         let response = await fetch(`http://localhost:4000/category/${id}`);
//         let data = await response.json();
//         setCategories(Array.from(new Set(data.map(d => d.category))));
//         setArray(data);
//     }

//     useEffect(() => {
//         fetchData()
//     },[]);

//     return(<div>
//         {products.map(category => (
//           <button key={category} onClick={() => setSelectedCategory(category)}>
//             {category}
//           </button>
//         ))}
//         <div>
//             {array
//              .filter(el => {
//                if (selectedCategory) {
//                  return selectedCategory === el.category;
//                }
//                return true;
//              })
//              .map(el =>
//                 <div>
//                     <div><img src={el.image}/></div>
//                     <div>{el.name}</div>
//                 </div>)}
//         </div>
//     </div>)
// }

// export default Products;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function Categories() {
//   const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.products);

//   return products.map((category) => {
//     return (
//       <div key={category.id}>
//         <NavLink to={`/category/${category.id}`} activeClassName="sidebar">
//           {category.name}
//         </NavLink>
//       </div>
//     );
//   });
// }

// export default Categories;
