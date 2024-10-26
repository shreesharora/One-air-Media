import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import './index.css';
// import  'bootstrap';
import "./css/style.scss";

import App from './components/App';
import Store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);
