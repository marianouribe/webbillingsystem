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
    render() {
        return (
            <div  className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="nav-side-menu">
                            <div className="brand fa fa-desktop"> Web Billing System</div>
                            <i className="fas fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                            <div className="menu-list">
                                <ul id="menu-content" className="menu-content collapse out">
                                    <li data-toggle="collapse" data-target="#newFacturacion" className="collapsed">
                                        <a href="#"><i className="far fa-money-bill-alt fa-lg"></i>Facturación</a><i className="fa fa-angle-down"></i>
                                    </li>
                                    <ul className="sub-menu collapse" id="newFacturacion">
                                         <li onClick={this._handleFacturar}><a><i className="fa fa-angle-right"></i>Facturar</a></li>
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Conduce</a></li>
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Devolución</a></li>
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Cotización</a></li>
                                    </ul>
                                    
                                    <li data-toggle="collapse" data-target="#newCxc" className="collapsed">
                                        <a href="#"><i className="far fa-credit-card fa-lg"></i>Cuentas Por Cobrar</a><i className="fa fa-angle-down"></i>
                                    </li>
                                    <ul className="sub-menu collapse" id="newCxc">
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Cobro</a></li>
                                    </ul>
                                    <li data-toggle="collapse" data-target="#newCxcConsulta" className="collapsed">
                                        <a href="#"><i className="fas fa-closed-captioning fa-lg"></i>Consultas</a><i className="fa fa-angle-down"></i>
                                    </li>
                                    <ul className="sub-menu collapse" id="newCxcConsulta">
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Consulta Cliente</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Cobros del dia</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right"></i>Resultado del dia</a></li>
                                    </ul>
                                    <li data-toggle="collapse" data-target="#newMantenimiento" className="collapsed">
                                        <a href="#"><i className="fas fa-cogs fa-lg"></i>Mantenimiento</a><i className="fa fa-angle-down"></i>
                                    </li>
                                    <ul className="sub-menu collapse" id="newMantenimiento">
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Clientes</a></li>
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Productos</a></li>
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Clasificación</a></li>
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Almacen</a></li>
                                    </ul>
                                    <li data-toggle="collapse" data-target="#newSeguridad" className="collapsed">
                                        <a href="#"><i class="far fa-user-circle fa-lg"></i>Seguridad</a><i className="fa fa-angle-down"></i>
                                    </li>
                                    <ul className="sub-menu collapse" id="newSeguridad">
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Usuario</a></li>
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Perfiles</a></li>
                                         <li><a href="#"><i className="fa fa-angle-right"></i>Permisos</a></li>
                                    </ul>
                                    <li data-toggle="collapse" data-target="#newSalir" className="collapsed"
                                    onClick={() => this._handleSalir()}>
                                        <a><i className="fas fa-sign-out-alt fa-lg" ></i>Salir</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Menu;

// < div className = "col-sm-9 col-sm-offset-1" > <h1>Web Billing System</h1> < /div>