import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL } from '../types';
export function CreateProductsAction(product) {
	return (dispatch) => {
		dispatch(createProduct());
	};
}

export const createProduct = () => ({
	type : ADD_PRODUCT
});
