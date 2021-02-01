import * as React from 'react';

export const Select = ({ id, input, label, choices }) => {
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
		<div id={id}>
			<label>{label}</label>
			<select
				value={input.value}
				onChange={(e) => {
					input.onChange(e.target.value);
				}}>
				{renderOptions()}
			</select>
		</div>
	);
};
