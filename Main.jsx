import React from 'react';
import ReactDOM from 'react-dom';
import AppNew from './components/AppNew.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

const route = (
		<Provider store={store}>
			<AppNew store={store}/>
		</Provider>
	)

ReactDOM.render(route,document.getElementById('home-div'));