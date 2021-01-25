import * as React from 'react';

const Button = ({ buttonConfig: { label, onButtonClick, color } }) => {
	return (
		<button onClick={onButtonClick} className={`ui ${color ? color : 'green'} button`}>
			{label}
		</button>
	);
};

export default Button;
