import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<React.Fragment>
			<nav>
				<div>
					<Link to="/">Go to Home</Link>
				</div>
				<Link to="/products/new">Agregar nuevo producto &#43;</Link>
			</nav>
		</React.Fragment>
	);
}

export default Header;
