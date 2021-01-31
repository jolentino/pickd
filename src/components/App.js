import * as React from 'react';
import { Router, Route } from 'react-router-dom';

import '../styles/App.css';
import history from '../history';
import Header from './Header';
import PickdHome from './pickd/PickdHome';
import PickdProduct from './pickd/PickdProduct';
import PickdCart from './pickd/PickdCart';
import PickdConfirmation from './pickd/PickdConfirmation';

const App = () => {
	return (
		<div class="container">
			<Router history={history}>
				<Header />
				<Route path="/" exact component={PickdHome} />
				<Route path="/create-a-product" exact component={PickdProduct} />
				<Route path="/cart" exact component={PickdCart} />
				<Route path="/confirmation/:order" exact component={PickdConfirmation} />
			</Router>
		</div>
	);
};

export default App;
