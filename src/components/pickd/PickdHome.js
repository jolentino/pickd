import * as React from 'react';
import { motion } from 'framer-motion';

import '../../styles/components/PickdHome.css';
import animation from '../../animation';
import history from '../../history';
import Button from '../utilities/Button';
import heroVideo from '../../assets/hero.gif';

// Standard landing page.
const PickdHome = () => {
	const buttonConfig = {
		label: "Let's Get Started",
		onButtonClick: () => history.push('/build'),
	};

	return (
		<motion.div id="hero" className="container" {...animation}>
			<img src={heroVideo} alt="Pick'd Logo" id="hero-video" />
			<h1>Your taste is unique. Why settle? </h1>
			<p id="mission" className="headings">
				Our mission at Pick'd is to provide customized plant-based protein powders, picked by you!
				<br />
				We value your health as well as the Earth's, so our ingredients are always organic and sustainable.
			</p>
			<Button buttonConfig={buttonConfig} />
		</motion.div>
	);
};

export default PickdHome;
