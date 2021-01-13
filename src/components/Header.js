import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to="/">Logo</Link>
			<div>Pick'd</div>
			<Link>Cart</Link>
		</div>
	);
};

export default Header;
