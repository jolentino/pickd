import * as React from 'react';

import '../../styles/utilities.css';

const Button = ({ buttonConfig: { label, onButtonClick, color } }) => {
	return (
		<button onClick={onButtonClick} style={color ? { backgroundColor: color } : null}>
			{label}
		</button>
	);
};

export default Button;
