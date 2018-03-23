import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Home from '../menu/menu';
import './billing.css';

import {Route, Link} from 'react-router-dom';

class billing extends Component{
    constructor(props) {
      super(props);

      // this.state={billing_page:'billing-page'};
      // this._buttonClose = this._buttonClose.bind(this);
  }
  
   //const _buttonClose = () => {
      //ReactDOM.render(<Home /> , document.getElementById('root'));
      

   //}
  //     if (this.state.billing_page === "billing-page")
  //       this.setState({billing_page: "close-billing-page"});
  //     else
  //       this.setState({billing_page: "billing-page"});
      
        
  // }

  render(){return(
    
    <div className="collapse ppagepanel" id = "pagePanelModalBilling">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>

          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <Link to = "/">
        <button className="btn btn-primary" >Close</button>  </Link>

        
      </form>
      <Route exact path="/" component={Home} />
    </div>);
  }
}

export default billing;
