import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, compose, applyMiddleware} from 'redux'
import {rootReducer} from './redux/rootReducer'


import AOS from 'aos';
import 'aos/dist/aos.css';

import './i18n';

AOS.init();

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
