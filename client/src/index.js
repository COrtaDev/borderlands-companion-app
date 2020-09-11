import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import App from './App';
import configureStore from './store';

const store = configureStore();
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
