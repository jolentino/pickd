import * as React from 'react';

const Button = ({ buttonConfig: { label, onButtonClick } }) => {
	return (
		<button onClick={onButtonClick} className="ui green button">
			{label}
		</button>
	);
};

export default Button;
