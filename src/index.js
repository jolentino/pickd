import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import App from './components/App';
import reducers from './reducers';

const clientId = 'ARBS1mRGAzRgrWyrSSlDhknsGz0aWbpDMxkV9Xo7GFCWQxd3ZPMz7Bx9A0tBv3ePPTIPtYJItPB2yCtE';

ReactDOM.render(
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		{/* Provider to access PayPal Button */}
		<PayPalScriptProvider options={{ 'client-id': clientId }}>
			<App />
		</PayPalScriptProvider>
	</Provider>,
	document.querySelector('#root')
);
