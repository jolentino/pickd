import * as React from 'react';
import { connect } from 'react-redux';

import { createProduct } from '../../actions/';
import PickdForm from './PickdForm';

class PickdProduct extends React.Component {
	onFormSubmit = (formValues) => {
		createProduct(formValues);
	};

	render() {
		return (
			<div className="ui grid">
				<div className="eleven wide column">
					<div className="ui segment">Interactive</div>
				</div>
				<div className="five wide column">
					<div className="ui segment">
						<PickdForm onFormSubmit={this.onFormSubmit} />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { createProduct })(PickdProduct);
