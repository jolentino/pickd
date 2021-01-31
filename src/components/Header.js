import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';
import logo from '../assets/leaf.svg';

const Header = () => {
	return (
		<div id="nav-bar">
			<div>
				<Link to="/" className="nav-buttons" id="home-link">
					<img src={logo} alt="Pick'd Logo" id="logo-image" />
					<span id="logo-name">Pick'd</span>
				</Link>
				<Link to="/create-a-product" className="nav-buttons" id="build-link">
					Build
				</Link>
			</div>

			<Link to="/cart" className="nav-buttons" id="cart-link">
				Cart
			</Link>
		</div>
	);
};

export default Header;
