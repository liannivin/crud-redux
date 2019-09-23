import React, { useState } from "react";

// Redux
import {
  ValidateForm,
  validateFormFail,
  validateFormSuccess
} from "../actions/ValidationAction";
import { CreateProductsAction } from "../actions/ProductsActions";
import { useDispatch, useSelector } from "react-redux";

function CreateProducts({ history }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  // Get data from state
  const error = useSelector(state => state.error.error);

  // Create new product
  const dispatch = useDispatch();
  const validateForm = () => dispatch(ValidateForm());
  const addProduct = product => dispatch(CreateProductsAction(product));
  const validationSuccessful = () => dispatch(validateFormSuccess());
  const validationFailed = () => dispatch(validateFormFail());

  // Add new product
  const createNewProduct = event => {
    // Avoid page reloading
    event.preventDefault();

    // Validate
    validateForm();

    if (title.trim() === "" || price.trim() === "") {
      validationFailed();
      console.log("Validation error!");
      return;
    }

    // If validation is successful
    validationSuccessful();
    console.log("Validation Successful!");

    // Add product
    addProduct({
      title,
      price
    });

    // Redirect
    history.push("/");
  };

  return (
    <React.Fragment>
      <h1>Create Products</h1>
      <div>
        <form onSubmit={createNewProduct}>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={event => setPrice(event.target.value)}
            />
          </div>
          <button type="submit">Add book</button>
        </form>

        {error ? <div>All fields are required..</div> : null}
      </div>
    </React.Fragment>
  );
}

export default CreateProducts;
