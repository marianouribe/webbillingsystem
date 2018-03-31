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
import DataService from "../services/data-service";

const http = new HttpService();



let ds = new DataService();
// var reg;

class billing extends Component{
  

  constructor(props){
      super(props);

      this.state = { products: [], inputSearch: "", inlineFormCustomSelectAmount: "5", labelMontoTotal: 0 };

      //Bind functions
      this.loadData = this.loadData.bind(this);
      this.productList = this.productList.bind(this);
      // this.onChangeInputFiltroArticulo = this.onChangeInputFiltroArticulo.bind(this);
      // this.onButtonBuscarOnClick = this.onButtonBuscarOnClick.bind(this);
      this.updateinlineFormCustomSelectAmount = this.updateinlineFormCustomSelectAmount.bind(this);
      this.loadData();

    }

    loadData = () =>{
      let self = this;
      // console.log(this.state.inputSearch);
      http.getProducts("articulo/" + this.state.inlineFormCustomSelectAmount + "/" + this.state.inputSearch).then(data => {
          // console.log(data.recordset);

          self.setState({ products: data.recordset });
        }, er => {});

        // console.log(this.state.inlineFormCustomSelectAmount);
    }

    updateSearch=(event)=>{
        this.setState({ inputSearch: event.target.value.substr(0, 30)});
        // this.loadData();
        
        // console.log(this.state.inputSearch);

    }

    updateinlineFormCustomSelectAmount=(event)=>{
      this.setState({ inlineFormCustomSelectAmount: event.target.value}, () => {
        this.loadData();
      });
      // console.log(event.target.value); 
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

     removeProduct = (event) => {
        ds.removeBuyListItem(this.props.articulo,1);
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
                  Filtro:
                </label>
                <input type="search" className="form-control d-inline w-50 ml-1 mb-3" id="inputSearch" value={this.state.inputSearch} onChange={this.updateSearch} autoFocus />

                <button className="btn btn-outline-primary ml-1" onClick={this.onButtonBuscarOnClick.bind(this)}>
                  Buscar
                </button>

                {/* <label className="font-weight-bold">Mostrar:</label> */}
                <label className="ml-2">Mostrar</label>
                <select value={this.state.inlineFormCustomSelectAmount} onChange={this.updateinlineFormCustomSelectAmount} 
                className="form-control custom-select-amount d-inline ml-2">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                </select>
                <label className="ml-2">registros</label>
              </div>
              <div className="row font-weight-bold mb-3 product-header pt-1 pt-1">
                <div className="col-md-2">Referencia</div>
                <div className="col-md-6">Descripción</div>
                <div className="col-md-2 text-right">Precio</div>
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
              <button type="button" class="close" aria-label="Close" onClick={e => this.removeProduct(e)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </Link>
            <div className="billing-form buylist pt-4">
              <h3 className="mb-4">Productos Seleccionados</h3>

                <BuyList />

                <hr />
                <div className="mt-3 mr-3">
                  <div className="row font-weight-bold">
                    <div className="col-md-6 text-right">
                      <p>Total: </p>
                    </div>
                    <div className="col-md-6 text-right">
                      <p className="custom-p" id="labelMontoTotal">
                        DOP0.00
                      </p>
                    </div>
                  </div>
                </div>
              
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
