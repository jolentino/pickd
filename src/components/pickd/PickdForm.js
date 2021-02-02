import * as React from 'react';

import '../../styles/PickdForm.css';
import { Field, reduxForm } from 'redux-form';
import { Select } from '../utilities/Select';
import Button from '../utilities/Button';

class PickdForm extends React.Component {
	// Powder Combinations
	sizeChoices = ['32oz', '64oz'];
	flavorChoices = ['Chocolate', 'Chocolate Peanut Butter', 'Cookies and Cream', 'Vanilla', 'Very Berry'];
	proteinChoices = ['Hemp', 'Pea', 'Rice', 'Soy'];
	fatChoices = ['Avocado Oil Powder', 'Olive Oil Powder', 'Palm Oil Powder'];
	carbChoices = ['Oat Starch Powder', 'Sweet Potato Powder', 'Whole Grain Complex Powder'];

	render() {
		return (
			<div id="options-container">
				<h1>Pick'd for you, Pick'd by you.</h1>
				<p>
					In an effort to keep our products sustainable, we ship our powders in eco-friendly glass jars. Here at Pick'd, we take pride in our approach to use
					less plastic.
					<br />
					<em>Additionally, returning customers may also return their jars to recieve a discount on their next order!</em>
				</p>
				<p>
					Pick'd powders also come boosted with naturally-sourced essential vitamins and minerals to ensure maximum nutrition. For more information about our
					ingredients, consider visiting our FAQ.
				</p>
				<form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
					<Field name="size" choices={this.sizeChoices} component={Select} id="size" />
					<Field name="flavor" choices={this.flavorChoices} component={Select} id="flavor" />
					<Field name="protein" choices={this.proteinChoices} component={Select} id="protein" />
					<Field name="fat" choices={this.fatChoices} component={Select} id="fat" />
					<Field name="carb" choices={this.carbChoices} label="Carb: " component={Select} id="carb" />
					<Button type="submit" buttonConfig={{ label: 'Complete Order', onButtonClick: null }} />
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'proteinForm',
})(PickdForm);
