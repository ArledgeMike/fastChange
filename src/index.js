import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Page from './resources/scripts/page';

const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Page />
	</React.StrictMode>
);
