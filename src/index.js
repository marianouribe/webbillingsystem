import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
import Login from './login/login';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
        
            <Login />
        , document.getElementById('root'));
        

registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
