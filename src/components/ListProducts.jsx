import React from 'react';

function ListProducts() {
	return (
		<React.Fragment>
			<h1>List of Products</h1>
			<table className="w3-table-all w3-tiny">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Januarysldadjlkj</td>
						<td>$100</td>
						<td>Action1</td>
					</tr>
					<tr>
						<td>February</td>
						<td>$80</td>
						<td>Action2</td>
					</tr>
					<tr>
						<td>February</td>
						<td>$80</td>
						<td>Action2</td>
					</tr>
					<tr>
						<td>February</td>
						<td>$80</td>
						<td>Action2</td>
					</tr>
					<tr>
						<td>February</td>
						<td>$80</td>
						<td>Action2</td>
					</tr>
					<tr>
						<td>February</td>
						<td>$80</td>
						<td>Action2</td>
					</tr>
					<tr>
						<td>February</td>
						<td>$80</td>
						<td>Action2</td>
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	);
}

export default ListProducts;
