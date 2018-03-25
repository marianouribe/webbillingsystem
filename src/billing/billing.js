import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';
import './billing.css';

//Components
import Home from '../home/home';
import Product from '../product/product';
import BuyList from '../buylist/buylist'

//Services
import HttpService from '../services/http-service';

const http = new HttpService();
// var reg;

class billing extends Component{
  

  constructor(props){
      super(props);

      this.state= {products:[]};

      //Bind functions
      this.loadData = this.loadData.bind(this);
      this.productList = this.productList.bind(this);

      this.loadData();

    }

    loadData = () =>{
      var self = this;
      http.getProducts().then(data => {
          // console.log(data);
          self.setState({products: data.Listadoarticulo})
      }, er=> {

      });
    }
    
    productList = () => {
        const list = this.state.products.map((articulo) => 
          <div key={articulo.IdArticulo}>
            <Product articulo={articulo}/>
          </div>
      );
      return (list);
    }

  render(){
    
    return <div className="ppagepanel" id="pagePanelModalBilling">
        <div className="row">
          <div className="col-md-8">
            <h1 id="detFacturacion">Detalle de Facturación</h1>
            <form className="billing-form pt-4">
              <h3 id="infCliente">Información del Cliente</h3>
              <div className="row">
                <div className="form-group col-md-4 fg-group">
                  <label for="inputIdentificionCliente">Identifación</label>
                  <input type="text" className="form-control" id="inputIdentificionCliente" placeholder="Cedula/Pasaport/Rnc" />
                </div>
                <div className="form-group col-md-8 fg-group">
                  <label for="inputNombreCliente">Nombre</label>
                  <input type="text" className="form-control" id="inputNombreCliente" placeholder="Nombre del cliente" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 fg-group">
                  <label for="inputDireccionCliente">Dirección</label>
                  <input type="text" className="form-control" id="inputDireccionCliente" placeholder="Dirección" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4 fg-group">
                  <label>Telefono</label>
                  <input type="text" className="form-control" id="NombreCliente" placeholder="Telefono de residencia" />
                </div>
                <div className="form-group col-md-4 fg-group">
                  <label>Trabajo</label>
                  <input type="text" className="form-control" id="NombreCliente" placeholder="Telefono de trabajo" />
                </div>
                <div className="form-group col-md-4 fg-group">
                  <label>Celular</label>
                  <input type="text" className="form-control" id="NombreCliente" placeholder="Número de celular" />
                </div>
              </div>
            </form>
            <br />
            <form className="billing-form pt-4">
              <h3 id="infCliente">Detalle de Factura</h3>
                <div className="row font-weight-bold mb-3 product-header">
                  <div className="col-md-2">Articulo</div>
                  <div className="col-md-7">Descripción</div>
                  <div className="col-md-2">Precio</div>
                  <div className="col-md-1">(+/-)</div>
                </div>

                {this.productList()}
                
            </form>
            <br />
            <form className="billing-form pt-4">
              <h3 id="detFactura">Forma de Pago</h3>
              <div className="">
                <div className="form-group fg-group w-25 mr-3">
                  <label>Identifación</label>
                  <input type="text" className="form-control" id="IdentificacionCliente" placeholder="Cedula/Pasaport/Rnc" />
                </div>
                <div className="form-group fg-group w-50">
                  <label>Nombre</label>
                  <input type="password" className="form-control" id="NombreCliente" placeholder="Nombre del cliente" />
                </div>
                <div className="form-group fg-group w-25 mr-3">
                  <label>Identifación</label>
                  <input type="text" className="form-control" id="IdentificacionCliente" placeholder="Cedula/Pasaport/Rnc" />
                </div>
                <div className="form-group fg-group w-50">
                  <label>Nombre</label>
                  <input type="password" className="form-control" id="NombreCliente" placeholder="Nombre del cliente" />
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4">
            <Link to="/" className="btn-Close float-right">
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </Link>
            <div className="billing-form buylist pt-4">
              <h3>Articulos Seleccionados</h3>
              <br/>
              <BuyList />
            </div>
          </div>
        </div>
        <div className="mt-4 mb-5 float-right">
          <button id="Save" className="btn btn-primary mr-1">
            Grabar
          </button>
        </div>

        <Route exact path="/" component={Home} />
      </div>;
  }
}

export default billing;
