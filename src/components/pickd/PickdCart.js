import * as React from 'react';
import { connect } from 'react-redux';

import { textConverter } from '../../textConverter';

class PickdCart extends React.Component {
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

		return order;
	}

	render() {
		return (
			<div className="ui raised container segment center aligned">
				<h1>Your Order:</h1>
				<div>{this.props.product ? this.renderProductSummary() : 'Your cart is empty!'}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { product: state.pickd.product };
};

export default connect(mapStateToProps)(PickdCart);
