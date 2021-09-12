const initialState = {

  item: [],
  loading: false,
};
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/pending":
      return {
        ...state,
        loading: true,
      };
    case "/product/fulfilled":
      return {
        ...state,
        item: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export const fetchProductOne = () => {
  return async (dispatch) => {
    dispatch({ type: "product/pending" });

    const res = await fetch("http://localhost:4000/product/6138cadcb9cfd68164ffa9e5");
    const json = await res.json();
console.log(res)
    dispatch({ type: "/product/fulfilled", payload: json });
  };
};

