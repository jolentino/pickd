import * as React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import '../../styles/components/PickdCart.css';
import animation from '../../animation';
import { PayPal } from '../utilities/PayPal';
import { orderProduct } from '../../actions';
import { textConverter } from '../../textConverter';
import PickdInteractive from './PickdInteractive';
import Button from '../utilities/Button';
import history from '../../history';

class PickdCart extends React.Component {
	// Config object for Button.
	buttonConfig = {
		label: 'Start Over',
		onButtonClick: () => history.push('/build'),
		color: 'grey',
	};

	// Callback for PayPal API to invoke 'Product Confirmation' action creator.
	// It has to wait for the transaction to be captured first.
	onApprove = async (data, actions) => {
		const response = await actions.order.capture();
		this.props.orderProduct(response);
	};

	// Helper method to render order summary.
	renderProductSummary() {
		let total = null;
		const order = [];
		const { product } = this.props;

		for (let choice in product) {
			// Conditionally sets total.
			if (choice === 'size') {
				switch (product[choice]) {
					case '32oz':
						total = '24.99';
						break;
					case '64oz':
						total = '34.99';
						break;
					default:
						total = '24.99';
						break;
				}
			}

			// Pushes values onto 'order' processed as JSX.
			order.push(
				<div key={product[choice]}>
					<p>
						<span style={{ fontWeight: 'bold' }}>{textConverter(choice)}:</span> {textConverter(product[choice])}
					</p>
				</div>
			);
		}

		// Cart info includes summary, image of product, and PayPal button.
		return (
			<div id="product-summary">
				<PickdInteractive finishedProduct={product} />
				<div id="order-info">
					<div>{order}</div>
					<h3>Total: ${total}</h3>
					<Button buttonConfig={this.buttonConfig} id="reset" />
					<PayPal onApprove={this.onApprove} total={total} />
				</div>
			</div>
		);
	}

	// Conditional cart.
	render() {
		return (
			<motion.div id="cart" className="container" {...animation}>
				<h1 id="cart-title">Your Order:</h1>
				{this.props.product ? this.renderProductSummary() : 'Your cart is empty!'}
			</motion.div>
		);
	}
}

// Retrieves reduced form values.
const mapStateToProps = (state) => {
	return { product: state.pickd.product };
};

export default connect(mapStateToProps, { orderProduct })(PickdCart);
