import * as React from 'react';

import { Field, reduxForm } from 'redux-form';
import { Radiobox } from '../utilities/Radiobox';
import Button from '../utilities/Button';

class PickdForm extends React.Component {
	// Powder Combinations
	flavorsChoices = ['Chocolate', 'Chocolate Peanut Butter', 'Cookies and Cream', 'Vanilla', 'Very Berry'];
	proteinChoices = ['Hemp', 'Pea', 'Rice', 'Soy'];
	fatChoices = ['Avocado Oil Powder', 'Olive Oil Powder', 'Palm Oil Powder'];
	carbChoices = ['Oat Starch Powder', 'Sweet Potato Powder', 'Whole Grain Complex Powder'];

	render() {
		return (
			<form className="ui form" onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
				<Field name="flavor" choices={this.flavorsChoices} label="Flavors: " component={Radiobox} />
				<Field name="protein" choices={this.proteinChoices} label="Proteins: " component={Radiobox} />
				<Field name="fat" choices={this.fatChoices} label="Fats: " component={Radiobox} />
				<Field name="carb" choices={this.carbChoices} label="Carbs: " component={Radiobox} />
				<Button type="submit" buttonConfig={{ label: 'Complete Order', onButtonClick: null }} />
			</form>
		);
	}
}

// FOR ME: Add form validation next
export default reduxForm({
	form: 'proteinForm',
})(PickdForm);
