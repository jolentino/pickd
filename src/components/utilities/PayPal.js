import * as React from 'react';

import { PayPalButtons } from '@paypal/react-paypal-js';

export const PayPal = (props) => {
	const createOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					intent: 'CAPTURE',
					description: "Custom Pick'd Order",
					amount: {
						value: '24.99',
					},
				},
			],
		});
	};

	return <PayPalButtons fundingSource="paypal" createOrder={createOrder} onApprove={props.onApprove} />;
};
