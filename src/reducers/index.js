import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';

export default combineReducers({
	// Actions and Reducers
	products : ProductsReducer
});
