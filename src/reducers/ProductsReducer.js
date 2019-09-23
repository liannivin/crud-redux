import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL } from "../types";

// Each reducer has their own state
const initialState = {
  products: [],
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        error: null,
        loading: false
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        products: [...state.products, action.payload]
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
