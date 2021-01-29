import history from '../history';

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

export const orderProduct = (response) => {
	return (dispatch) => {
		dispatch({
			type: 'PRODUCT_ORDERED',
			payload: response,
		});

		history.push(`/confirmation/${response.id}`);
	};
};
