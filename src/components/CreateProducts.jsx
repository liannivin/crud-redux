import React, { useState } from 'react';

// Redux
import { CreateProductsAction } from '../actions/ProductsActions';
import { useDispatch } from 'react-redux';

function CreateProducts() {
	const [ title, setTitle ] = useState('');
	const [ price, setPrice ] = useState('');

	// Create new product
	const dispatch = useDispatch();
	const addProduct = (product) => dispatch(CreateProductsAction(product));

	// Add new product
	const createNewProduct = (event) => {
		// Avoid page reloading
		event.preventDefault();

		addProduct({
			title,
			price
		});

		// Validate
		if (title.trim() === '' || price.trim() === '') {
			console.log('Validation erorr');
			return;
		}

		// Redirect
	};

	return (
		<React.Fragment>
			<h1>Create Products</h1>
			<div>
				<form onSubmit={createNewProduct}>
					<div>
						<label>Title</label>
						<input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
					</div>
					<div>
						<label>Price</label>
						<input type="text" placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)} />
					</div>
					<button type="submit">Add book</button>
				</form>
			</div>
		</React.Fragment>
	);
}

export default CreateProducts;
