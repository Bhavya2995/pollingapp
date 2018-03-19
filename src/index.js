import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,{},applyMiddleware());

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
