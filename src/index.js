import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Login from './login/login';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/toastr/build/toastr.css';
// import 'jquery';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
 

import './index.css';
// import App from './App/App';
// import App from './App/App';

ReactDOM.render(
    <BrowserRouter>
        <Routes /> 
    </BrowserRouter>, document.getElementById('root'));
        