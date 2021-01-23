import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/leaf.svg';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="link item">
				<img
					src={logo}
					style={{
						width: '20px',
						marginRight: '5px',
					}}
					alt="Pick'd Logo"
				/>
				Pick'd
			</Link>
			<div className="right menu">
				<Link to="/cart" className="link item">
					Cart
				</Link>
			</div>
		</div>
	);
};

export default Header;
