import * as React from 'react';
import { connect } from 'react-redux';

import { textConverter } from '../../textConverter';
import Button from '../utilities/Button';
import history from '../../history';
import { PayPal } from '../utilities/PayPal';

class PickdCart extends React.Component {
	// Helper method to render order summary.
	renderProductSummary() {
		// Array for choices descriptions.
		const order = [];
		const { product } = this.props;

		for (let choice in product) {
			order.push(
				<div>
					<p>
						<span style={{ fontWeight: 'bold' }}>{textConverter(choice)}:</span> {textConverter(product[choice])}
					</p>
				</div>
			);
		}

		return (
			<>
				{order}
				<h5>Total: $24.99</h5>
			</>
		);
	}

	// Config object for Button
	buttonConfig = {
		label: 'Start Over',
		onButtonClick: () => history.push('/create-a-product'),
		color: 'grey',
	};

	// Conditional cart.
	render() {
		return (
			<div className="ui raised container segment center aligned">
				<h1>Your Order:</h1>
				<div>{this.props.product ? this.renderProductSummary() : 'Your cart is empty!'}</div>
				<div>
					{this.props.product ? <Button buttonConfig={this.buttonConfig} /> : null}
					{this.props.product ? <PayPal /> : null}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { product: state.pickd.product };
};

export default connect(mapStateToProps)(PickdCart);
