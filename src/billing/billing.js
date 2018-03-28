import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';
import './billing.css';

//Components
import Home from '../home/home';
import Product from '../product/product';
import BuyList from '../buylist/buylist'

// import DataService from "../services/data-service";
// let ds = new DataService()

//Services
import HttpService from '../services/http-service';

const http = new HttpService();
// var reg;

class billing extends Component{
  

  constructor(props){
      super(props);

      this.state = { products: [], inputSearch: "", labelTotal: 0 };

      //Bind functions
      this.loadData = this.loadData.bind(this);
      this.productList = this.productList.bind(this);
      // this.onChangeInputFiltroArticulo = this.onChangeInputFiltroArticulo.bind(this);
      this.onButtonBuscarOnClick = this.onButtonBuscarOnClick.bind(this);
      this.loadData();

    }

    loadData = () =>{
      let self = this;
      // console.log(this.state.inputSearch);
      http.getProducts("api/articulo/" + this.state.inputSearch).then(data => {
          // console.log(data.recordset);

          self.setState({ products: data.recordset });
        }, er => {});
    }

    updateSearch=(event)=>{
        this.setState({ inputSearch: event.target.value.substr(0, 30)});
        // this.loadData();
        
        // console.log(this.state.inputSearch);

    }

    onButtonBuscarOnClick=(event) =>{
      this.loadData();
      event.preventDefault();
    }
    
     productList = () => {
    //     // let listf = this.state.products.filter(
    //     //     (articulo) => {
    //     //       console.log(articulo.DescripcionArticulo);
    //     //       return articulo.DescripcionArticulo.toLowerCase().indexOf(this.state.inputSearch.toLowerCase()) !== -1;
    //     //     }
    //     // );
         const list = this.state.products.map(articulo => (
           <div key={articulo.CodigoArticulo}>
             <Product articulo={articulo} />
           </div>
         ));
          
       return (list);
     }

  render(){
    // let productSearch = this.props.articulo;
      // let list = this.state.products.filter(
      //        (articulo) => {
      //          console.log(articulo.DescripcionArticulo);
      //          return articulo.DescripcionArticulo.toLowerCase().indexOf(this.state.inputSearch.toLowerCase()) !== -1;
      //        }
      //    );
    return <div className="ppagepanel" id="pagePanelModalBilling">
        <div className="row">
          <div className="col-md-8">
            <h1 id="detFacturacion">Detalle de Facturación</h1>
            <form className="billing-form pt-4">
              <h3 id="infCliente">Productos</h3>
              <div className="mt-2">
                <label for="inputSearch" className="font-weight-bold">
                  Filtro
                </label>
                <input type="text" className="form-control d-inline w-50 ml-1 mb-3" id="inputSearch" value={this.state.inputSearch} onChange={this.updateSearch.bind(this)} />
                <button className="btn btn-outline-primary ml-1" onClick={this.onButtonBuscarOnClick.bind(this)}>
                  Buscar
                </button>
              </div>
              <div className="row font-weight-bold mb-3 product-header pt-1 pt-1">
                <div className="col-md-2">Articulo</div>
                <div className="col-md-6">Descripción</div>
                <div className="col-md-2">Precio</div>
                <div className="col-md-2" />
              </div>

              {/* {list.map((articulo) => {
                <div key={articulo.CodigoArticulo}>
                  <Product articulo={articulo} />
                </div>
              })} */}

              {this.productList()}
            </form>
            <br />
            <form className="billing-form pt-4">
              <h3 id="infCliente">Información del Cliente</h3>
              <div className="row">
                <div className="form-group col-md-4 fg-group">
                  <label for="inputIdentificionCliente">Identifación</label>
                  <input type="text" className="form-control" id="inputIdentificionCliente" placeholder="Cedula/Pasaport/Rnc" />
                </div>
                <div className="form-group col-md-8 fg-group">
                  <label for="inputNombreCliente">Nombre</label>
                  <input type="text" className="form-control" id="inputNombreCliente" />
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
                  <input type="text" className="form-control" id="inputTelefonoResidencia" placeholder="Telefono de residencia" />
                </div>
                <div className="form-group col-md-4 fg-group">
                  <label>Trabajo</label>
                  <input type="text" className="form-control" id="inputTelefonoTrabajo" placeholder="Telefono de trabajo" />
                </div>
                <div className="form-group col-md-4 fg-group">
                  <label>Celular</label>
                  <input type="text" className="form-control" id="inputCelular" placeholder="Número de celular" />
                </div>
              </div>
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
              <br />
              <BuyList />
            </div>
            <div className="text-left">
              <label id="labelTotal">Total:$ </label>
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
