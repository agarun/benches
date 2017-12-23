import React from 'react';
import ReactDOM from 'react-dom';

import * as A from './util/session_api_util';

window.login = A.login;
window.signup = A.signup;
window.signout = A.signout;

import configureStore from './store/store';

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Benchbnb</h1>, root);
});
