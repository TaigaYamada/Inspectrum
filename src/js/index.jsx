// ===== React imports ===== //
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import connectComponent from './helpers/connectComponent';
import App from './components/App';

// ===== Redux imports ===== //
import store from './store';

// ===== SASS import (just for webpack) ===== //
import '../sass/main.scss';

const ConnectedApp = connectComponent(App);
render(<Provider store={store}><ConnectedApp /></Provider>, document.querySelector('#root'));