import * as React from 'react';

import history from '../../history';
import Button from '../utilities/Button';
import logo from '../../assets/leaf.svg';

const PickdHome = () => {
	const label = 'Build Your Protein';

	const onButtonClick = () => {
		history.push('/create-a-product');
	};

	return (
		<div className="ui vertical center aligned segment">
			<img src={logo} alt="Pick'd Logo" style={{ width: '100px' }} />
			<h2>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam fugit, voluptate aliquid vitae accusamus corrupti non, tempore magni consequatur
				doloremque amet, itaque molestiae ipsa quisquam blanditiis assumenda dignissimos? Maxime, id.
			</h2>
			<Button buttonConfig={{ label, onButtonClick }} className="item" />
		</div>
	);
};

export default PickdHome;
