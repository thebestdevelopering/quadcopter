// const initialState = {
//   user: [],
//   loading: false,
// };
// export default function users(state = initialState, action) {
//   switch (action.type) {
//     case "user/getById/pending":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "user/getById/fulfilled":
//       return {
//         ...state,
//         loading: false,
//         user: action.payload,
//       };
//     case "user/getById/rejected":
//       return {
//         ...state,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// }

// export const loadUsers = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: "user/getById/pending" });

//     try {
//       const res = await fetch(`http://localhost:4000/user/`);
//       const json = await res.json();

//       dispatch({ type: "user/getById/fulfilled", payload: json });
//     } catch (e) {
//       dispatch({ type: "user/getById/rejected", error: e.toString() });
//     }
//   };
// };
