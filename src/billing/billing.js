import React, { Component } from "react";
import ReacDon from 'react-dom';
import './billing.css';

class billing extends Component{
    constructor(props) {
      super(props);

      // this.state={billing_page:'billing-page'};
      // this._buttonClose = this._buttonClose.bind(this);
  }
  
  // _buttonClose = () => {
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
        
        <button className="btn btn-primary" data-toggle="collapse" data-target="#pagePanelModalBilling">Close</button>  
      </form>
      
    </div>);
  }
}

export default billing;
