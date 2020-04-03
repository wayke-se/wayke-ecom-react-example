import React from 'react';
import ReactDOM from 'react-dom';

import Ecom from '@wayke-se/ecom-react';
import { config as ecomConfig } from "@wayke-se/ecom";

ecomConfig.bind({
    api: {
        address: "https://ecom.wayke.se"
    },
});

const hideEcomModal = () => {
	ReactDOM.unmountComponentAtNode(
		document.getElementById('ecom-modal-wrapper')
	);
};

const data = {
	vehicle: {
		id: 'invalid-id',
		title: '',
		shortDescription: '',
		price: 0,
		imageUrl: '',
		modelYear: 0,
		milage: '',
		gearBox: '',
		fuelType: ''
	},
	serviceLogotypeUrl: '',
	onExit: hideEcomModal,
	onUserEvent: (userEvent, currentStep) => {
		console.log(">> New tracking event");
		console.log("Event: " + userEvent);
		console.log("Current step: " + currentStep);
		console.log("-----");
	}
};

const showEcomModal = () => {
	ReactDOM.render(
		<Ecom {...data} />,
		document.getElementById('ecom-modal-wrapper')
	);
};

document.getElementById('wayke-ecom').addEventListener('click', showEcomModal);