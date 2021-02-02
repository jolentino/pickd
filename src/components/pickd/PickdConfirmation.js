import * as React from 'react';
import { connect } from 'react-redux';

import '../../styles/PickdConfirmation.css';
import logo from '../../assets/leaf.svg';
class PickdConfirmation extends React.Component {
	render() {
		const { payer } = this.props.confirmation;
		return (
			<div id="confirmation" className="container">
				<h3>Order Confirmation:</h3>
				<h5>Order ID: {this.props.confirmation.id}</h5>
				<p>
					Thank you <b>{`${payer.name.given_name} ${payer.name.surname}`}</b>! We've received your order and sent you an email with further details about your
					powder. We'll contact you again as soon as your package has shipped.
				</p>
				<p>
					Until then, stay safe and stay healthy!
					<br />
					-with love, Pick'd
					<br /> :)
				</p>
				<img src={logo} alt="Pick'd Logo" id="confirmation-pic" />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { confirmation: state.pickd.confirmation };
};

export default connect(mapStateToProps)(PickdConfirmation);
