import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Home from '../home/home';
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
    
    <div className="ppagepanel" id = "pagePanelModalBilling" >
      
      <h1 id="detFacturacion">Detalle de Facturación</h1>
      <div className="w-75">
        <form className="billing-form pt-4">
            <h3 id="infCliente">Información del Cliente</h3>
            <div className="">
              <div className="form-group fg-group w-25 mr-3">
                <label>Identifación</label>
                <input type="text" className="form-control" id="IdentificacionCliente" placeholder="Cedula/Pasaport/Rnc"/>
              </div>
              <div className="form-group fg-group w-50">
                <label>Nombre</label>
                <input type="password" className="form-control" id="NombreCliente" placeholder="Nombre del cliente"/>
              </div>
              <div className="form-group fg-group w-25 mr-3">
                <label>Identifación</label>
                <input type="text" className="form-control" id="IdentificacionCliente" placeholder="Cedula/Pasaport/Rnc"/>
              </div>
              <div className="form-group fg-group w-50">
                <label>Nombre</label>
                <input type="password" className="form-control" id="NombreCliente" placeholder="Nombre del cliente"/>
              </div>
            </div>
        </form>
        <br/>
        <form className="billing-form pt-4">
            <h3 id="detFactura">Detalle de factura</h3>
            <div className="">
              <div className="form-group fg-group w-25 mr-3">
                <label>Identifación</label>
                <input type="text" className="form-control" id="IdentificacionCliente" placeholder="Cedula/Pasaport/Rnc"/>
              </div>
              <div className="form-group fg-group w-50">
                <label>Nombre</label>
                <input type="password" className="form-control" id="NombreCliente" placeholder="Nombre del cliente"/>
              </div>
              <div className="form-group fg-group w-25 mr-3">
                <label>Identifación</label>
                <input type="text" className="form-control" id="IdentificacionCliente" placeholder="Cedula/Pasaport/Rnc"/>
              </div>
              <div className="form-group fg-group w-50">
                <label>Nombre</label>
                <input type="password" className="form-control" id="NombreCliente" placeholder="Nombre del cliente"/>
              </div>
            </div>
        </form>
        <br/>
        <form className="billing-form pt-4">
            <h3 id="detFactura">Forma de Pago</h3>
            <div className="">
              <div className="form-group fg-group w-25 mr-3">
                <label>Identifación</label>
                <input type="text" className="form-control" id="IdentificacionCliente" placeholder="Cedula/Pasaport/Rnc"/>
              </div>
              <div className="form-group fg-group w-50">
                <label>Nombre</label>
                <input type="password" className="form-control" id="NombreCliente" placeholder="Nombre del cliente"/>
              </div>
              <div className="form-group fg-group w-25 mr-3">
                <label>Identifación</label>
                <input type="text" className="form-control" id="IdentificacionCliente" placeholder="Cedula/Pasaport/Rnc"/>
              </div>
              <div className="form-group fg-group w-50">
                <label>Nombre</label>
                <input type="password" className="form-control" id="NombreCliente" placeholder="Nombre del cliente"/>
              </div>
            </div>
        </form>
      </div>
      <div className="mt-4 mb-5">
        <button id="Save" className="btn btn-outline-primary mr-1">Grabar</button>
        <Link to = "/">
          <button id="Close" className="btn btn-outline-primary">Cerrar</button>
        </Link>
      </div>
    
      <Route exact path="/" component={Home} />
    </div>);
  }
}

export default billing;
