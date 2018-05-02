import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import BuyList from "../buylist/buylist";
//Components
import Home from "../home/home";
import Product from "../product/product";
import DataService from "../services/data-service";

import Search from '../common/search';
import Input from '../common/input';

//Services
import HttpService from "../services/http-service";
// import "./billing.css";

const http = new HttpService();

let ds = new DataService();

class purchase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      inputSearch: "",
      valueSelect: "5",
      labelMontoTotal: 0
    };

    //this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    // this.updateinlineFormCustomSelectAmount = this.updateinlineFormCustomSelectAmount.bind(this);
    // this.loadData();
  }

  componentWillMount() {
    this.loadData();
    // console.log("componentWillMount");
  }

  // componentWillUpdate(){
  //   // this.loadData();
  //   console.log("componentWillUpdate");
  // }

  componentWillUnmount() {
    ds.removeBuyListItem(this.props.articulo, 1);
    // console.log("componentWillUnmount");
  }

  loadData = () => {
    let self = this;
    // console.log(this.state.inputSearch);
    http
      .getProducts(
        "articulo/" + this.state.valueSelect + "/" + this.state.inputSearch
      )
      .then(
        data => {
          self.setState({ products: data.recordset });
        },
        er => {}
      );

    // console.log(this.state.inlineFormCustomSelectAmount);
  };

  setSearch(event) {
    this.setState({ inputSearch: event.target.value.substr(0, 30) });
  }

  setValueSelect(event) {
    this.setState({ valueSelect: event.target.value }, () => {
      this.loadData();
    });
  }

  // updateinlineFormCustomSelectAmount(event){
  //   this.setState({inlineFormCustomSelectAmount: event.target.value});
  // };

  onButtonBuscar(event) {
    this.loadData();
    event.preventDefault();
  }

  productList = () => {
    const list = this.state.products.map(articulo => (
      <Product key={articulo.CodigoArticulo} articulo={articulo} />
    ));

    return list;
  };

  handleInput(event) {
    let value = event.target.value;
    let name = event.target.name;
    let infcliente = this.state.infcliente;

    console.log(name);
    infcliente[name] = value;
    this.setState({ infcliente });

    console.log(this.state.infcliente);
  }

  render() {
    return (
      <Home>
        <div className="ppagepanel" id="pagePanelModalBilling">
          <div className="row">
            <div className="col-md-8">
              <h1 id="detFacturacion">Detalle de Compra</h1>
              <form className="billing-form pt-4">
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

                <table className="table" />

                <div className="row font-weight-bold mb-3 product-header pt-1 pt-1">
                  <div className="col-md-2">Referencia</div>
                  <div className="col-md-6">Descripción</div>
                  <div className="col-md-2 text-right">Precio</div>
                  <div className="col-md-2" />
                </div>

                {this.productList()}
              </form>
              <br />
              <form className="billing-form pt-3 pb-3">
                <h3 id="infCliente">Información del Cliente</h3>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <Input
                        name="identificacion"
                        label="Identifación"
                        value={this.state.identificacion}
                        placeholder="Cedula/Rnc/Pasaport"
                        onChange={this.handleInput.bind(this)}
                      />
                    </div>
                    <div className="col-md-8">
                      <Input
                        name="nombre"
                        label="Nombre"
                        value={this.state.nombre}
                        onChange={this.handleInput.bind(this)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Input
                        name="direccion"
                        label="Dirección"
                        value={this.state.direccion}
                        onChange={this.handleInput.bind(this)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Input
                        name="telefonocasa"
                        label="Telefono casa"
                        value={this.state.telefonocasa}
                        onChange={this.handleInput.bind(this)}
                      />
                    </div>
                    <div className="col-md-4">
                      <Input
                        name="telefonotrabajo"
                        label="Telefono trabajo"
                        value={this.state.telefonotrabajo}
                        onChange={this.handleInput.bind(this)}
                      />
                    </div>
                    <div className="col-md-4">
                      <Input
                        name="celular"
                        label="Celular"
                        value={this.state.celular}
                        onChange={this.handleInput.bind(this)}
                      />
                    </div>
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
              
              <BuyList />
              
            </div>
          </div>
          <div className="mt-4 mb-5 float-right">
            <button id="Save" className="btn btn-primary mr-1">
              Grabar
            </button>
          </div>
        </div>
      </Home>
    );
  }
}

export default purchase;
