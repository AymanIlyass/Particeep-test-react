import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.scss';
import App from './components/App/App';
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister();
