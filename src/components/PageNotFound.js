import * as React from 'react';
import { motion } from 'framer-motion';

import animation from '../animation';
import error from '../assets/error.svg';

const PageNotFound = () => {
	return (
		<motion.div className="container" {...animation} style={{ textAlign: 'center' }}>
			<h1>Sorry, something went wrong.</h1>
			<img src={error} alt="Page Not Found Image" style={{ width: '50%' }} />
		</motion.div>
	);
};

export default PageNotFound;
