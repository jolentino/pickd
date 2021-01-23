import * as React from 'react';
import { connect } from 'react-redux';

import { createProduct } from '../../actions/';
import PickdInteractive from './PickdInteractive';
import PickdForm from './PickdForm';

class PickdProduct extends React.Component {
	onFormSubmit = (formValues) => {
		this.props.createProduct(formValues);
	};

	render() {
		return (
			<div className="ui stackable grid">
				<div className="twelve wide column">
					<div className="ui center aligned segment">
						<PickdInteractive />
					</div>
				</div>
				<div className="four wide column">
					<div className="ui segment">
						<PickdForm onFormSubmit={this.onFormSubmit} />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { createProduct })(PickdProduct);
