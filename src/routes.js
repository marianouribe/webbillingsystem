
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App/App';
import Login from './login/login';
import Home from './home/home';
import Billing from './billing/billing';
import Purchase from './purchase/purshase';
import NoFound from './NoFound'

const Routes =()=>{
    return <App>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/billing" component={Billing} />
          <Route path="/purchase" component={Purchase} />
          <Route exact path="/" component={Login} />
          <Route component={NoFound} />
        </Switch>
      </App>;
}

export default Routes;
