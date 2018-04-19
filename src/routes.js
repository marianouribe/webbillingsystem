
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App/App';
import Login from './login/login';
import Home from './home/home';
import Billing from './billing/billing';

const Routes =()=>{
    return(
        <App>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/billing" component={Billing}/>
                <Route exact path="/" component={Login}/>
            </Switch>
        </App>
    )
}

export default Routes;
