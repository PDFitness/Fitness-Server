import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import App from './containers/AppContainer';
import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger());
export const store = createStore(rootReducer, middleware);


/** 
 * Using App container instead of Routes 
 * The AppContainer contains the App component that has the navbar and other components.
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
