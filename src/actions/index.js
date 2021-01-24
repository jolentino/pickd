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
