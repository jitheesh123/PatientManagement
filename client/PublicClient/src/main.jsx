import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const store = configureStore({
  reducer,
  middleware: [thunkMiddleware],
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
