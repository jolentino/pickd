import * as React from 'react';

import '../../styles/components/PickdHome.css';
import history from '../../history';
import Button from '../utilities/Button';
import heroVideo from '../../assets/hero.gif';

const PickdHome = () => {
	const buttonConfig = {
		label: "Let's Get Started",
		onButtonClick: () => history.push('/build'),
	};

	return (
		<div id="hero" className="container">
			<img src={heroVideo} alt="Pick'd Logo" id="hero-video" />
			<h1>Your taste is unique. Why settle? </h1>
			<p id="mission" className="headings">
				Our mission at Pick'd is to provide customized plant-based protein powders, picked by you!
				<br />
				We value your health as well as the Earth's, so our ingredients are always organic and sustainable.
			</p>
			<Button buttonConfig={buttonConfig} />
		</div>
	);
};

export default PickdHome;
