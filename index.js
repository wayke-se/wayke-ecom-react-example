import React from 'react';
import ReactDOM from 'react-dom';

import Ecom from '@wayke-se/ecom-react';
import { config as ecomConfig } from "@wayke-se/ecom";

const showEcomModal = () => {
	ReactDOM.render(
		<Ecom {...window.__ecomDevData} />,
		document.getElementById('ecom-modal-wrapper')
	);
};

const hideEcomModal = () => {
	ReactDOM.unmountComponentAtNode(
		document.getElementById('ecom-modal-wrapper')
	);
}

ecomConfig.bind({
    api: {
        address: window.__ecomApiAddress
    },
});

window.__ecomHandlers = {
	showEcomModal,
	hideEcomModal
};