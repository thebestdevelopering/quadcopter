// const initialState = {
//     loading: true,
//     product: [],
//     error: null,
//     image: [],
//   };
//  console.log(initialState.product)

//   export default function products(state = initialState, action) {
//     switch (action.type) {
//       case "product/fetch":
//         return {
//           ...state,
//           loading: true,
//         };
//       case "product":
//         return {
//           ...state,
//           loading: false,
//           product: action.payload,
//           error: action.error,
//         };
//       case "productww":
//         return {
//           ...state,
//           loading: false,
//           product: action.error,
//         };
//       case "product/post/pending":
//         return {
//           ...state,
//           loading: true,
//         };
//       case "product/post/fulfilled":
//         return {
//           ...state,
//           loading: false,
//           product: action.payload,
//         };
  
//       case "product/image/pending":
//         return {
//           ...state,
//           loading: true,
//         };
//       case "product/image/fulfilled":
//         return {
//           ...state,
//           loading: false,
//           image: action.payload.image,
//         };
//       case "product/delete":
//         return {
//           ...state,
//           product: state.product.filter(
//             (products) => products.id !== action.payload
//           ),
//         };
//         case "product/edit":
//         return {
//           ...state,
//           product: state.product.filter(
//             (products) => products.id !== action.payload
//           ),
//         };
//         case "products/filter/fulfilled":
//         return {
//           ...state,
//           filter: action.payload,
//         };
  
//       default:
//         return state;
//     }
//   }
  
//   export const fetchProductOne = (id) => {
//       console.log(id)
//     return async (dispatch, getState) => {
//       const state = getState();
//       dispatch({ type: "product/fetch" });
//       try {
//         const response = await fetch("http://localhost:4000/product/6138cadcb9cfd68164ffa9e5", {
          
//         });
  
//         const json = await response.json();
//         console.log(json)
  
//         if (json.error) {
//           dispatch({
//             type: "product/fetch-products/rejected",
//             error: "При запросе на сервер произошла ошибка",
//           });
//         } else {
//           dispatch({ type: "product", payload: json });
//           console.log(payload)
//         }
//       } catch (e) {
//         dispatch({
//           type: "product/fetch-products/rejected",
//           error: e.toString(),
//         });
//       }
//     };
//   };
  
  