import history from '../history';

// Action Creator to pass values from form to the cart.
export const createProduct = (formValues) => {
	// Relies on middleware for programmatic navigation to cart.
	return (dispatch) => {
		dispatch({
			type: 'PRODUCT_CREATED',
			payload: formValues,
		});

		history.push('/cart');
	};
};

// Action Creator to pass captured transaction information from PayPal to confirmation page.
export const orderProduct = (response) => {
	// Relies on middleware for programmatic navigation to confirmation.
	return (dispatch) => {
		dispatch({
			type: 'PRODUCT_ORDERED',
			payload: response,
		});

		history.push(`/confirmation/${response.id}`);
	};
};
