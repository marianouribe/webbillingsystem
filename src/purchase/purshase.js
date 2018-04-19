import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import BuyList from "../buylist/buylist";
//Components
import Home from "../home/home";
import Product from "../product/product";
import DataService from "../services/data-service";

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

  render() {
    return (
      <Home>
        <div className="ppagepanel" id="pagePanelModalBilling">
          <div className="row">
            <div className="col-md-8">
              <h1 id="detFacturacion">Detalle de Compra</h1>
              <form className="billing-form pt-4">
                <h3 id="infCliente">Productos</h3>
                <div className="mt-2">
                  <label className="font-weight-bold"> Filtro: </label>
                  <input
                    type="search"
                    className="form-control d-inline w-50 ml-1 mb-3"
                    id="inputSearch"
                    value={this.state.inputSearch}
                    onChange={this.setSearch.bind(this)}/>

                  <button
                    className="btn btn-outline-primary ml-1"
                    onClick={this.onButtonBuscar.bind(this)}>
                    Buscar
                  </button>

                  {/* <label className="font-weight-bold">Mostrar:</label> */}
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
                </div>

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
              <form className="billing-form pt-4">
                <h3 id="infCliente">Información del Cliente</h3>
                <div className="row">
                  <div className="form-group col-md-4 fg-group">
                    <label>Identifación</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputIdentificionCliente"
                      placeholder="Cedula/Pasaport/Rnc"
                    />
                  </div>
                  <div className="form-group col-md-8 fg-group">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputNombreCliente"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12 fg-group">
                    <label>Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputDireccionCliente"
                      placeholder="Dirección"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4 fg-group">
                    <label>Telefono</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputTelefonoResidencia"
                      placeholder="Telefono de residencia"
                    />
                  </div>
                  <div className="form-group col-md-4 fg-group">
                    <label>Trabajo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputTelefonoTrabajo"
                      placeholder="Telefono de trabajo"
                    />
                  </div>
                  <div className="form-group col-md-4 fg-group">
                    <label>Celular</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCelular"
                      placeholder="Número de celular"
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
              <div className="billing-form buylist pt-4">
                <BuyList />
              </div>
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
