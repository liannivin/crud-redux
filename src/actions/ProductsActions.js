import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL } from "../types";

import axiosClient from "../config/axios";

export function CreateProductsAction(product) {
  return dispatch => {
    dispatch(addProduct());

    // Insert to API
    axiosClient
      .post("/posts", product)
      .then(response => {
        console.log(response);

        // Succesful insertion of data
        dispatch(addProductSuccess(product));
      })
      .catch(error => {
        console.log(error);

        // If error
        dispatch(addProductFail(error));
      });
  };
}

export const addProduct = () => ({
  type: ADD_PRODUCT
});

export const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});

export const addProductFail = error => ({
  type: ADD_PRODUCT_FAIL,
  payload: error
});
