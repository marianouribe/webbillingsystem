import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';
import BuyList from '../buylist/buylist';
//Components
import Home from '../home/home';
import Product from '../product/product';
import DataService from "../services/data-service";
import Input from '../common/input';
import Searc from '../common/search';

//Services
import HttpService from '../services/http-service';
import Search from "../common/search";

import {Redirect} from 'react-router-dom';
import Toastr from 'toastr';

const http = new HttpService();

let ds = new DataService();

class billing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      infcliente : {
        identificacion: "",
        nombre: "",
        direccion: "",
        telefonocasa: "",
        telefonotrabajo: "",
        celular: ""
      },
      inputSearch: "",
      valueSelect: "5",
      // labelMontoTotal: 0,
      fireRedirect: false

    };

    this.productList = this.productList.bind(this);
  }

  componentDidMount(){
    // this.setState({valueSelect:"5", inputSearch:""});
    this.loadData();
  }

  componentWillUnmount(){
    ds.removeBuyListItem(this.props.articulo, 1);
  }

  loadData = () => {
    let self = this;
    // console.log(this.state.inputSearch);
    http.getApi("articulo/" + this.state.valueSelect + "/" + this.state.inputSearch)
      .then(
        data => {
          self.setState({ products: data.recordset });
        },
        er => {}
      );
  };

  setSearch(event){
    this.setState({ inputSearch: event.target.value.substr(0, 30) });
  };

  setValueSelect(event) {
     this.setState({ valueSelect: event.target.value }, () => {
       this.loadData();
      });
  }
  
  onButtonBuscar(event) {
    event.preventDefault();
    this.loadData();
  };

  productList = () => {
    const list = this.state.products.map(articulo => (
        <Product key={articulo.CodigoArticulo} articulo={articulo} />
    ));

    return list;
  };

  handleInput(event){
    let value = event.target.value;
    let name = event.target.name;
    let infcliente = this.state.infcliente;

    // console.log(name);
    infcliente[name] = value;
    this.setState({infcliente});

    // console.log(this.state.infcliente);
  }

  safeBilling(event){
    event.preventDefault();
    this.setState({fireRedirect:false});

    Toastr.success("Listo save");
  }

  render() {
    // this.loadData();
    return (
      
      <Home >
               
        <div className="ppagepanel" id="pagePanelModalBilling">

          <div className="row">
            <div className="col-md-8">
              <h1 id="detFacturacion">Detalle de Facturación</h1>
              <form className="billing-form pt-3 pb-3">
                <h3 id="infCliente">Productos</h3>
                <Search 
                  name="inputSearch"
                  label="Filtro"
                  inputSearch={this.state.inputSearch}
                  setSearch={this.setSearch.bind(this)}
                  onButtonBuscar={this.onButtonBuscar.bind(this)}
                  valueSelect={this.state.valueSelect}
                  setValueSelect={this.setValueSelect.bind(this)}
                />
                {/* <div className="mt-2">
                  <label className="font-weight-bold"> Filtro: </label>
                  <input type="search" className="form-control d-inline w-50 ml-1 mb-3" id="inputSearch" value={this.state.inputSearch} 
                    onChange={this.setSearch.bind(this)} />

                  <button className="btn btn-outline-primary ml-1" onClick={this.onButtonBuscar.bind(this)}>Buscar</button>

                  <label className="ml-2">Mostrar</label>
                  <select
                    value={this.state.valueSelect}
                    onChange={this.setValueSelect.bind(this)}
                    className="form-control custom-select-amount d-inline ml-2">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </select>
                  <label className="ml-2">registros</label>
                </div> */}

                {/* <table className="table">
                </table> */}

                { <div className="row font-weight-bold mb-3 product-header pt-1 pt-1">
                  <div className="col-md-2">Referencia</div>
                  <div className="col-md-6">Descripción</div>
                  <div className="col-md-2 text-right">Precio</div>
                  <div className="col-md-2" />
                </div> }

                {/* <React.Fragment>
                  <td>Referencia</td>
                  <td>Descripción</td>
                  <td>Precio</td>
                  <td> </td>
                </React.Fragment> */}

                {this.productList()}
              </form>
              <br />
              <form className="billing-form pt-3 pb-3">
                <h3 id="infCliente">Información del Cliente</h3>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <Input 
                        name = "identificacion"
                        label = "Identifación"
                        value = {this.state.identificacion}
                        placeholder = "Cedula/Rnc/Pasaport"
                        onChange = {this.handleInput.bind(this)}
                      />
                      
                    </div>
                    <div className="col-md-8">
                      <Input 
                        name = "nombre"
                        label = "Nombre"
                        value = {this.state.nombre}
                        onChange = {this.handleInput.bind(this)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Input 
                        name = "direccion"
                        label = "Dirección"
                        value = {this.state.direccion}
                        onChange = {this.handleInput.bind(this)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Input 
                        name = "telefonocasa"
                        label = "Telefono casa"
                        value = {this.state.telefonocasa}
                        onChange = {this.handleInput.bind(this)}
                      />
                    </div>
                    <div className="col-md-4">
                      <Input 
                        name = "telefonotrabajo"
                        label = "Telefono trabajo"
                        value = {this.state.telefonotrabajo}
                        onChange = {this.handleInput.bind(this)}
                      />
                    </div>
                    <div className="col-md-4">
                      <Input 
                        name = "celular"
                        label = "Celular"
                        value = {this.state.celular}
                        onChange = {this.handleInput.bind(this)}
                      />
                    </div>
                  </div>
                </div>
              </form>

              <br />
              <form className="billing-form pt-4">
                <h3 id="detFactura">Forma de Pago</h3>
                <div className="form-group fg-group">
                  <label htmlFor="name" className="form-control-label">Identifación</label>
                  <div className="field">
                    <input type="text" className="form-control"
                      placeholder="Cedula/Pasaport/Rnc"/>
                  </div>
                  <div className="w-50">
                    <label>Nombre</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Nombre del cliente"
                    />
                  </div>
                  <div className="w-25 mr-3">
                    <label>Identifación</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cedula/Pasaport/Rnc"
                    />
                  </div>
                  <div className="w-50">
                    <label>Nombre</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Nombre del cliente"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-4">
              <Link to="/home" className="btn-Close float-right">
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </Link>
              {/* <div className="billing-form buylist pt-4"> */}
                
                <BuyList />
                  
              {/* </div> */}
            </div>
          </div>
          <div className="mt-4 mb-5 float-right">
            <button id="Save" className="btn btn-primary mr-1" onClick={this.safeBilling.bind(this)}>
              Grabar
            </button>
          </div>
          
          {/* redirect al component luego de grabar */}
          {this.state.fireRedirect && (
            <Redirect to="/home"/>
          )}

          {/* <Route exact path="/" component={Home} /> */}
          
        </div>
      </Home>
    );
  }
}

export default billing;
