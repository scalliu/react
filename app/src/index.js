import React from 'react';
import registerServiceWorker from './registerServiceWorker'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import './assets/base.scss'
import information from './mock'

if (process.env.NODE_ENV === 'development') {
    information()
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();


