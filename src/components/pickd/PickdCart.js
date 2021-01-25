import * as React from 'react';
import { connect } from 'react-redux';

import { textConverter } from '../../textConverter';
import Button from '../utilities/Button';
import history from '../../history';

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

	// Helper method for cart buttons.
	configureButton = (label, location, color) => {
		return (
			<Button
				buttonConfig={{
					label: label,
					onButtonClick: () => {
						history.push(`/${location}`);
					},
					color: color,
				}}
			/>
		);
	};

	// Conditional cart.
	render() {
		return (
			<div className="ui raised container segment center aligned">
				<h1>Your Order:</h1>
				<div>{this.props.product ? this.renderProductSummary() : 'Your cart is empty!'}</div>
				<div>
					{this.props.product ? this.configureButton('Start Over', 'create-a-product', 'grey') : null}
					{this.props.product ? this.configureButton('Complete Order', 'order') : null}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { product: state.pickd.product };
};

export default connect(mapStateToProps)(PickdCart);
