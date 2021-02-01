import * as React from 'react';
import { connect } from 'react-redux';

import { PayPal } from '../utilities/PayPal';
import { orderProduct } from '../../actions';
import { textConverter } from '../../textConverter';
import Button from '../utilities/Button';
import history from '../../history';

class PickdCart extends React.Component {
	total = null;

	// Helper method to render order summary.
	renderProductSummary() {
		// Array for choices descriptions.
		const order = [];
		const { product } = this.props;

		for (let choice in product) {
			product[choice] === '32oz' ? (this.total = '24.99') : (this.total = '34.99');

			order.push(
				<div key={product[choice]}>
					<p>
						<span style={{ fontWeight: 'bold' }}>{textConverter(choice)}:</span> {textConverter(product[choice])}
					</p>
				</div>
			);
		}

		return (
			<>
				{order}
				<h5>${this.total}</h5>
			</>
		);
	}

	// Config object for Button
	buttonConfig = {
		label: 'Start Over',
		onButtonClick: () => history.push('/build'),
		color: 'grey',
	};

	// Callback for PayPal API to invoke action creator
	onApprove = async (data, actions) => {
		const response = await actions.order.capture();
		this.props.orderProduct(response);
	};

	// Conditional cart.
	render() {
		return (
			<div className="ui raised container segment center aligned">
				<h1>Your Order:</h1>
				<div>{this.props.product ? this.renderProductSummary() : 'Your cart is empty!'}</div>
				<div>
					{this.props.product ? <Button buttonConfig={this.buttonConfig} /> : null}
					{this.props.product ? <PayPal onApprove={this.onApprove} total={this.total} /> : null}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { product: state.pickd.product };
};

export default connect(mapStateToProps, { orderProduct })(PickdCart);
