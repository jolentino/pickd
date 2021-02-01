import * as React from 'react';
import { connect } from 'react-redux';

import '../../styles/PickdProduct.css';
import { createProduct } from '../../actions/';
import PickdInteractive from './PickdInteractive';
import PickdForm from './PickdForm';

class PickdProduct extends React.Component {
	onFormSubmit = (formValues) => {
		// Validation for missing choice.
		if (!formValues.size || !formValues.flavor || !formValues.protein || !formValues.fat || !formValues.carb) {
			return alert('Please make a choice for each category.');
		}

		this.props.createProduct(formValues);
	};

	render() {
		return (
			<div id="build" className="container">
				<PickdInteractive />
				<PickdForm onFormSubmit={this.onFormSubmit} />
			</div>
		);
	}
}

export default connect(null, { createProduct })(PickdProduct);
