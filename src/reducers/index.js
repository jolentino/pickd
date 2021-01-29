import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

const pickdReducers = (state = {}, action) => {
	switch (action.type) {
		case 'PRODUCT_CREATED':
			return { ...state, product: action.payload };
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
