import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="l-nav">
            <h2>WB</h2>
            <h2>System</h2>
            <nav className = "nav flex-column"> 
                <div  id="navbarContentMenu">
                    <ul id="menu-content" className="navbar-nav">
                        <li data-toggle="collapse" data-target="#newFacturacion" >
                            <a href="#"><i className="far fas fa-laptop fa-2x"></i>
                            <label>Facturación</label></a>
                        </li>
                        
                        <li data-toggle="collapse" data-target="#newCxc">
                            <a href="#"><i className="far fa-closed-captioning fa-2x"></i>
                            <label>Cuentas Por Cobrar</label></a>
                        </li>
                        
                        <li data-toggle="#" data-target="#newCxcConsulta" >
                            <a href="#"><i className="far fa-newspaper fa-2x"></i>
                            <label>Consultas</label></a>
                        </li>
                        
                        <li data-target="#newMantenimiento" >
                            <a href="#"><i className="fas fa-cogs fa-2x"></i>
                            <label>Mantenimiento</label></a>
                        </li>
                        
                        <li data-target="#newSeguridad" >
                            <a href="#"><i class="far fa-user fa-2x"></i>
                            <label>Seguridad</label></a>
                        </li>
                        
                        <li data-target="#newSalir"  onClick={() => this._handleSalir()}>
                            <a href="#"><i className="fas fa-sign-out-alt fa-2x"></i>
                            <label>Salir</label></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )
  }
};

export default NavBar;
