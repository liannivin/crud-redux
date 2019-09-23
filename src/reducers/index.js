import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import ValidationReducer from "./ValidationReducer";

export default combineReducers({
  // Actions and Reducers
  products: ProductsReducer,
  error: ValidationReducer
});
