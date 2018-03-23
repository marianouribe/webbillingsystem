import React, { Component } from 'react';
import Billing from "../billing/billing";

import {Route, Link} from 'react-router-dom';

class BillingMenu extends Component {

  render() {

    return (
        <div>
            <div id="newFacturacion" className="collapse">
                <div className="l-container-menu" >        
                    <div className="row">
                        <div className="col-sm-12">
                            
                            <Link to = "/billing" >
                                <div className="container-custom-menu" >
                                    <i className="fas fa-dollar-sign fa-3x"></i>
                                    <h4>Facturación</h4>
                                </div>
                            </Link>
                            <div className="container-custom-menu" >
                                <i className="fa fa-shopping-cart fa-3x"></i>
                                
                                <h4>Compras</h4>
                            </div>

                            <div className="container-custom-menu" >
                                <i className="fas fa-file-alt fa-3x"></i>
                                
                                <h4>Cotización</h4>
                            </div>
                
                            <div className="container-custom-menu">
                                <i className="far fa-file-alt fa-3x"></i>
                                
                                <h4>Conduce</h4>
                            </div>
                            
                            <div className="container-custom-menu">
                                <i className="far fa-newspaper fa-3x"></i>
                                
                                <h4>Ventas</h4>
                            </div>
                            
                        </div>   
                    </div>
                </div>            
            </div>

            <Route path="/billing" component={Billing} />

        </div>
    )
  }
};

export default BillingMenu;
//<Route exact={true} path="/" component={Login} />