import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from '../login/login';

class NavBar extends Component {

    _handleSalir=()=>{
        ReactDOM.render(<Login />, document.getElementById('root'));
    }

  render() {
    return <div className="">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded l-nav navbar-custom">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
          <h2>WB System</h2>

          <div className="collapse navbar-collapse flex-column" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0 flex-column">
              <li data-toggle="collapse" data-target="#newFacturacion">
                <a href="#">
                  <i className="far fas fa-laptop fa-2x" />
                  <label>Facturación</label>
                </a>
              </li>

              <li data-toggle="collapse" data-target="#newCxc">
                <a href="#">
                  <i className="far fa-closed-captioning fa-2x" />
                  <label>Cuentas Por Cobrar</label>
                </a>
              </li>

              <li data-toggle="#" data-target="#newCxcConsulta">
                <a href="#">
                  <i className="far fa-newspaper fa-2x" />
                  <label>Consultas</label>
                </a>
              </li>

              <li data-target="#newMantenimiento">
                <a href="#">
                  <i className="fas fa-cogs fa-2x" />
                  <label>Mantenimiento</label>
                </a>
              </li>

              <li data-target="#newSeguridad">
                <a href="#">
                  <i className="far fa-user fa-2x" />
                  <label>Seguridad</label>
                </a>
              </li>

              <li data-target="#newSalir" onClick={() => this._handleSalir()}>
                <a href="#">
                  <i className="fas fa-sign-out-alt fa-2x" />
                  <label>Salir</label>
                </a>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form> */}
          </div>
        </nav>

        {/* <div className="l-nav navbar-custon">
          <h2>WB</h2>
          <h2>System</h2>
          <nav className="nav flex-column">
            <div id="navbarContentMenu">
              <ul id="menu-content" className="navbar-nav">
                <li data-toggle="collapse" data-target="#newFacturacion">
                  <a href="#">
                    <i className="far fas fa-laptop fa-2x" />
                    <label>Facturación</label>
                  </a>
                </li>

                <li data-toggle="collapse" data-target="#newCxc">
                  <a href="#">
                    <i className="far fa-closed-captioning fa-2x" />
                    <label>Cuentas Por Cobrar</label>
                  </a>
                </li>

                <li data-toggle="#" data-target="#newCxcConsulta">
                  <a href="#">
                    <i className="far fa-newspaper fa-2x" />
                    <label>Consultas</label>
                  </a>
                </li>

                <li data-target="#newMantenimiento">
                  <a href="#">
                    <i className="fas fa-cogs fa-2x" />
                    <label>Mantenimiento</label>
                  </a>
                </li>

                <li data-target="#newSeguridad">
                  <a href="#">
                    <i class="far fa-user fa-2x" />
                    <label>Seguridad</label>
                  </a>
                </li>

                <li data-target="#newSalir" onClick={() => this._handleSalir()}>
                  <a href="#">
                    <i className="fas fa-sign-out-alt fa-2x" />
                    <label>Salir</label>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div> */}
      </div>;
  }
};

export default NavBar;
