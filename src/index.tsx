import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import { persistor, store } from './modules/store';
import { Provider } from 'react-redux';
import { SetUser } from './modules/Login/reducer';
import { PersistGate } from 'redux-persist/integration/react';

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
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
