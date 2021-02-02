import * as React from 'react';

import '../../styles/utilities.css';

export const Select = ({ input, choices }) => {
	const renderOptions = () => {
		return choices.map((choice, i) => {
			// For HTML Compatibility
			const hyphenedChoice = choice.replace(/\s/g, '-').toLowerCase();

			// Configured Options
			return (
				<option key={hyphenedChoice} value={hyphenedChoice}>
					{choice}
				</option>
			);
		});
	};

	return (
		<div id={input.name}>
			<select
				value={input.value}
				onChange={(e) => {
					input.onChange(e.target.value);
				}}>
				<option selected="selected">Choose a {input.name}</option>
				{renderOptions()}
			</select>
		</div>
	);
};
