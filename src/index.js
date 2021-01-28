import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const clientId = 'ARBS1mRGAzRgrWyrSSlDhknsGz0aWbpDMxkV9Xo7GFCWQxd3ZPMz7Bx9A0tBv3ePPTIPtYJItPB2yCtE';

ReactDOM.render(
	<Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
		<PayPalScriptProvider options={{ 'client-id': clientId }}>
			<App />
		</PayPalScriptProvider>
	</Provider>,
	document.querySelector('#root')
);
