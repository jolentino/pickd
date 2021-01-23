export const createProduct = (formValues) => {
	return {
		type: 'PRODUCT_CREATED',
		payload: formValues,
	};
};
