import * as React from 'react';

import '../../styles/utilities.css';

export const Select = ({ input, choices }) => {
	// Helper function that iterates over choices passed from PickdForm for each select input.
	const renderOptions = () => {
		return choices.map((choice, i) => {
			// For HTML Compatibility.
			const hyphenedChoice = choice.replace(/\s/g, '-').toLowerCase();

			// Configured Options.
			return (
				<option key={hyphenedChoice} value={hyphenedChoice}>
					{choice}
				</option>
			);
		});
	};

	// Select input for form.
	return (
		<div id={input.name}>
			<select
			// Controlled component.
				value={input.value}
				onChange={(e) => {
					input.onChange(e.target.value);
				}}>
					{/* Default value that acts as a label for the select input. */}
				<option>Choose a {input.name}</option>
				{renderOptions()}
			</select>
		</div>
	);
};
