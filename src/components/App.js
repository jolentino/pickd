import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import '../styles/components/App.css';
import history from '../history';
import Header from './Header';
import PickdHome from './pickd/PickdHome';
import PickdProduct from './pickd/PickdProduct';
import PickdCart from './pickd/PickdCart';
import PickdConfirmation from './pickd/PickdConfirmation';

const App = () => {
	return (
		<div id="pickd">
			<Router history={history}>
				<Header />
				{/* Provider for Framer-Motion animations */}
				<AnimatePresence exitBeforeEnter>
					<Route path="/" exact component={PickdHome} />
					<Route path="/build" exact component={PickdProduct} />
					<Route path="/cart" exact component={PickdCart} />
					<Route path="/confirmation/:order" exact component={PickdConfirmation} />
				</AnimatePresence>
			</Router>
		</div>
	);
};

export default App;
