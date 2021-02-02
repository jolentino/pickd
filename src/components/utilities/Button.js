import * as React from 'react';

import '../../styles/utilities.css';

const Button = ({ buttonConfig: { label, onButtonClick, color }, id}) => {
	return (
		<button onClick={onButtonClick} style={color ? { backgroundColor: color } : null} id={id}>
			{label}
		</button>
	);
};

export default Button;
