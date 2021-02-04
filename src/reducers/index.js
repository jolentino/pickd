import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

const pickdReducers = (state = {}, action) => {
	switch (action.type) {
		// After building product, form values are stored in state for cart.
		case 'PRODUCT_CREATED':
			return { ...state, product: action.payload };
			// After checkout, cart is reset.
		case 'PRODUCT_ORDERED':
			return { ...state, product: undefined, confirmation: action.payload };
		default:
			return state;
	}
};

export default combineReducers({
	form: reducer,
	pickd: pickdReducers,
});
