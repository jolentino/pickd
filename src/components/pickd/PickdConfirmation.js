import * as React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import '../../styles/components/PickdConfirmation.css';
import animation from '../../animation';
import PageNotFound from '../PageNotFound';
import logo from '../../assets/leaf.svg';

class PickdConfirmation extends React.Component {
	render() {
		if (!this.props.confirmation) {
			return <PageNotFound />;
		}
		const { payer } = this.props.confirmation;
		return (
			<motion.div id="confirmation" className="container" {...animation}>
				<h3>Order Confirmation:</h3>
				<h5>Order ID: {this.props.confirmation.id}</h5>
				<p>
					Thank you <b>{`${payer.name.given_name} ${payer.name.surname}`}</b>! We've received your order and have sent you an email with further details about
					your purchase. We'll contact you again as soon as your package has shipped.
				</p>
				<p>
					Until then, stay safe and stay healthy!
					<br />
					-with love, Pick'd
					<br /> :)
				</p>
				<img src={logo} alt="Pick'd Logo" id="confirmation-pic" />
			</motion.div>
		);
	}
}

const mapStateToProps = (state) => {
	return { confirmation: state.pickd.confirmation };
};

export default connect(mapStateToProps)(PickdConfirmation);
