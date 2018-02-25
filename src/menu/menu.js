import React,{ Component} from "react";
import ReacDom from 'react-dom';
import './menu.css';

import Login from '../login/login';
import Factutrar from '../facturar/facturar';


class Menu extends Component{

    _handleFacturar = () =>{
        ReacDom.render(<Factutrar />, document.getElementById('root'));
    }

    _handleSalir = () =>{
        ReacDom.render(<Login />, document.getElementById('root'));
    }

    // <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    render() {
        return (
            <div>
                
                    <nav className = "navbar navbar-toggleable-md navbar-inverse bg-faded"> 
                        <a className = "navbar-brand" href = "#" > 
                            <h2 clasName="navbar-brand mb-0"><i className = "fa fa-desktop"></i>  WBSystem</h2>
                        </a>
                        <button class="navbar-toggler custom-toggler navbar-toggler-right" type="button" 
                            data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <form className="form-inline navbar-right my-2 my-lg-0">
                            
                            <input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>
                            <i className="fas icon-search fa-search"></i>
                        </form>

                    </nav>
                
                <nav className = "nav flex-column"> 
                    
                    <div  id="navbarSupportedContent">
                        <ul id="menu-content" className="navbar-nav collapse">
                            <li data-target="#newFacturacion" className="collapsed">
                                <i className="far fa-money-bill-alt fa-lg"></i>Facturación
                            </li>
                            <ul className="sub-menu" id="newFacturacion">
                                <li onClick={this._handleFacturar}>
                                    <a href="#">Facturar</a>
                                </li>
                                <li>
                                    <a href="#">Conduce</a>
                                </li>
                                <li>
                                    <a href="#">Devolución</a>
                                </li>
                                <li>
                                    <a href="#">Cotización</a>
                                </li>
                            </ul>

                            <li data-target="#newCxc" className="collapsed">
                                <i className="far fa-credit-card fa-lg"></i>Cuentas Por Cobrar
                            </li>
                            <ul className="sub-menu" id="newCxc">
                                <li>
                                    <a href="#">Cobro</a>
                                </li>
                            </ul>
                            <li data-toggle="#" data-target="#newCxcConsulta" className="collapsed">
                                <i className="fas fa-closed-captioning fa-lg"></i>Consultas
                            </li>
                            <ul className="sub-menu" id="newCxcConsulta">
                                <li>
                                    <a href="#">Consulta Cliente</a>
                                </li>
                                <li>
                                    <a href="#">Cobros del dia</a>
                                </li>
                                <li>
                                    <a href="#">Resultado del dia</a>
                                </li>
                            </ul>
                            <li data-target="#newMantenimiento" className="collapsed">
                                <i className="fas fa-cogs fa-lg"></i>Mantenimiento
                            </li>
                            <ul className="sub-menu" id="newMantenimiento">
                                <li>
                                    <a href="#">Clientes</a>
                                </li>
                                <li>
                                    <a href="#">Proveedores</a>
                                </li>
                                <li>
                                    <a href="#">Productos</a>
                                </li>
                                <li>
                                    <a href="#">Clasificación</a>
                                </li>
                                <li>
                                    <a href="#">Almacen</a>
                                </li>
                            </ul>
                            <li data-target="#newSeguridad" className="collapsed">
                                <i class="far fa-user-circle fa-lg"></i>Seguridad
                            </li>
                            <ul className="sub-menu" id="newSeguridad">
                                <li>
                                    <a href="#">Usuario</a>
                                </li>
                                <li>
                                    <a href="#">Perfiles</a>
                                </li>
                                <li>
                                    <a href="#">Permisos</a>
                                </li>
                            </ul>
                            <li data-target="#newSalir" className="collapsed" onClick={() => this._handleSalir()}>
                                <a><i className="fas fa-sign-out-alt fa-lg"></i>Salir</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;

// <div className = "col-sm-9 col-sm-offset-1" > <h1>Web Billing System</h1> </div>


// <div className="collapse navbar-collapse" id="navbarSupportedContent">
// <ul className="navbar-nav mr-auto">
//                         <li className="nav-item active">
//                             <a className="nav-link" href="#">Home <span class="sr-only">(current)</span> </a> </li>
//                         <li className="nav-item active">
//                             <a className="nav-link" href="#">Link</a > 
//                         </li> 
//                             <li className = "nav-item active" > 
//                             <a className="nav-link" href="#">Disabled</a> 
//                         </li>
//                     </ul> 
// </div>