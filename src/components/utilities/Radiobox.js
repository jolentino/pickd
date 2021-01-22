import * as React from 'react';

export const Radiobox = ({ input, label, choices }) => {
	const renderRadioButtons = () => {
		return choices.map((choice) => {
			// For HTML Compatibility
			const hyphenedChoice = choice.replace(/\s/g, '-').toLowerCase();

			// Configured Radio Button
			return (
				<div className="field" key={hyphenedChoice}>
					<div className="ui radio checkbox">
						<input
							type="radio"
							id={hyphenedChoice}
							value={input.value}
							checked={input.value === hyphenedChoice ? true : false}
							onChange={(e) => {
								input.onChange(e.target.id);
							}}></input>
						<label>{choice}</label>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="grouped fields">
			<label>{label}</label>
			{renderRadioButtons()}
		</div>
	);
};
