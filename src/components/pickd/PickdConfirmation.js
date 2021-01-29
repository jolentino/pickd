import * as React from 'react';
import { connect } from 'react-redux';

class PickdConfirmation extends React.Component {
	render() {
		const { payer, purchase_units } = this.props.confirmation;
		return (
			<div className="ui raised container segment center aligned">
				<h1>Order Confirmation:</h1>
				<h4>Order ID: {this.props.confirmation.id}</h4>
				<p>
					Thank you <span>{`${payer.name.given_name} ${payer.name.surname}`}</span> for your order! We've received your order and will contact you as soon as
					your package is shipped.
				</p>
				<p>
					An email with additional details about your order was sent to <span>{purchase_units[0].payee.email_address}</span>
				</p>
				<h3>Thank you for picking Pick'd!</h3>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { confirmation: state.pickd.confirmation };
};

export default connect(mapStateToProps)(PickdConfirmation);
