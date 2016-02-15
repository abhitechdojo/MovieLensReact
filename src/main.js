import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './Reports/App.jsx';
import MovieLensAppStore from './stores/MovieLensAppStore';

render (
	<Provider store={MovieLensAppStore}>
		<App />
	</Provider>,
	document.getElementById('container')
)