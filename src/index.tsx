import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import { store } from './modules/store';
import { Provider } from 'react-redux';
import { SetUser } from './modules/Login/reducer';

function loadUser() {
  try {
    let user = sessionStorage.getItem('token');
    if (!user) return;
    store.dispatch(SetUser(user));
  } catch (e) {
    console.log(`loadUser 오류`);
  }
}

loadUser();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
