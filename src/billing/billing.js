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
      <div className="row">
        <div className="col-md-8">
          <h1 id="detFacturacion">Detalle de Facturación</h1>
          <form className="billing-form pt-4">
              <h3 id="infCliente" >Información del Cliente</h3>
              <div className="row">
                <div className="form-group col-md-4 fg-group">
                  <label for="inputIdentificionCliente">Identifación</label>
                  <input type="text" className="form-control" id="inputIdentificionCliente" placeholder="Cedula/Pasaport/Rnc"/>
                </div>
                <div className="form-group col-md-8 fg-group">
                  <label for="inputNombreCliente">Nombre</label>
                  <input type="text" className="form-control" id="inputNombreCliente" placeholder="Nombre del cliente"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 fg-group">
                  <label for="inputDireccionCliente">Dirección</label>
                  <input type="text" className="form-control" id="inputDireccionCliente" placeholder="Dirección"/>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4 fg-group">
                  <label>Telefono</label>
                  <input type="text" className="form-control" id="NombreCliente" placeholder="Telefono de residencia"/>
                </div>
                <div className="form-group col-md-4 fg-group">
                  <label>Trabajo</label>
                  <input type="text" className="form-control" id="NombreCliente" placeholder="Telefono de trabajo"/>
                </div>
                <div className="form-group col-md-4 fg-group">
                  <label>Celular</label>
                  <input type="text" className="form-control" id="NombreCliente" placeholder="Número de celular"/>
                </div>
              </div>
          </form>
          <br/>
          <form className="billing-form pt-4">
              <h3 id="infCliente" >Detalle de Factura</h3>
              <div class="table-responsive">
                <table class="table">
                  <caption>Listado de articulos</caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
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
        
        <div className="col-md-4">
            <Link to = "/" className="btn-Close float-right">
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </Link>
            <div className="billing-form buylist">
              <h3>wish list</h3>
            </div>
        </div>
      </div>
      <div className="mt-4 mb-5 float-right">
        <button id="Save" className="btn btn-primary mr-1">Grabar</button>
      </div>

      <Route exact path="/" component={Home} />
    </div>);
  }
}

export default billing;
