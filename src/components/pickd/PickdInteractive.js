import * as React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import '../../styles/PickdInteractive.css';
import jar from '../../assets/jar.svg';
import chocolate from '../../assets/chocolate-bar.svg';
import chocolatePeanutButter from '../../assets/peanut-butter.svg';
import cookiesAndCream from '../../assets/cookies-n-creme.svg';
import vanilla from '../../assets/vanilla.svg';
import veryBerry from '../../assets/berries.svg';
import hemp from '../../assets/hemp.svg';
import pea from '../../assets/peas.svg';
import rice from '../../assets/rice.svg';
import soy from '../../assets/soy.svg';
import avocadoOilPowder from '../../assets/avocado.svg';
import oliveOilPowder from '../../assets/olive.svg';
import palmOilPowder from '../../assets/coconut.svg';
import oatStarchPowder from '../../assets/oat.svg';
import sweetPotatoPowder from '../../assets/sweet-potato.svg';
import wholeGrainComplexPowder from '../../assets/powder.svg';

class PickdInteractive extends React.Component {
	// Object to access image variables by using Redux form values as keys.
	choices = {
		chocolate: chocolate,
		'chocolate-peanut-butter': chocolatePeanutButter,
		'cookies-and-cream': cookiesAndCream,
		vanilla: vanilla,
		'very-berry': veryBerry,
		hemp: hemp,
		pea: pea,
		rice: rice,
		soy: soy,
		'avocado-oil-powder': avocadoOilPowder,
		'olive-oil-powder': oliveOilPowder,
		'palm-oil-powder': palmOilPowder,
		'oat-starch-powder': oatStarchPowder,
		'sweet-potato-powder': sweetPotatoPowder,
		'whole-grain-complex-powder': wholeGrainComplexPowder,
	};

	// Helper method to render images onto Interactive Display configured by choice type and user input.
	renderChoice(type) {
		if (this.props[type]) {
			const choice = this.props[type];
			return <img src={this.choices[choice]} alt={`${choice}`} className={`${type} animate__animated animate__fadeIn`} />;
		} else return null;
	}

	// Interactive Display with conditional image rendering.
	render() {
		return (
			<div id="interactive-display">
				<img src={jar} alt="jar" id="jar" />
				{this.renderChoice('flavor')}
				{this.renderChoice('protein')}
				{this.renderChoice('fat')}
				{this.renderChoice('carb')}
			</div>
		);
	}
}

// FOR ME: A hardship I overcame...all hail StackOverflow and Redux-Form documentation
// Redux Form method to directly access form values.
const selector = formValueSelector('proteinForm');

// Form values from specific fields are added to the state to be recieved.
const mapStateToProps = (state) => {
	const flavor = selector(state, 'flavor');
	const protein = selector(state, 'protein');
	const fat = selector(state, 'fat');
	const carb = selector(state, 'carb');
	return { flavor, protein, fat, carb };
};

export default connect(mapStateToProps)(PickdInteractive);
