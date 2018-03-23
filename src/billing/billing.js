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
    
    <div className="ppagepanel bg-color-form" id = "pagePanelModalBilling" >
        <div >
            <form>
              <div className="form-group">
                <input type="email" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control w-50" id="exampleInputPassword1" placeholder="Password"/>
              </div>
            
            </form>
          </div>
          <Link to = "/">
        
        <button className="btn btn-primary">Close</button>  </Link>

        <br/>
        <br/>
        <br/>
        <br/>
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
<br/>
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
< br />
<br/>
< br />
< br />
< br />
< br />
< br />
< br />
< br />

      
      <Route exact path="/" component={Home} />
    </div>);
  }
}

export default billing;
