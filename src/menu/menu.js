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
                        <h2 clasName="navbar-brand mb-0"><i className = "fa fa-desktop"></i>  Web Billing System</h2>
                    </a>
                    <button class="navbar-toggler custom-toggler navbar-toggler-right" type="button" 
                        data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <form className="form-inline navbar-right my-2 my-lg-0">
                        <div className="form-inline icon-search-custom input">
                            <i className="fas icon-search fa-search" onClick={()=>this._handleSalir()}></i>
                            <input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>                                
                        </div>
                    </form>

                </nav>
                
                <nav className = "nav flex-column"> 
                    
                    <div  id="navbarSupportedContent">
                        <ul id="menu-content" className="navbar-nav collapse">
                            <li data-toggle="collapse" data-target="#newFacturacion" className="collapsed">
                                <a href="#"><i className="far fas fa-laptop fa-2x"></i>Facturación</a>
                            </li>
                            
                            <li data-toggle="collapse" data-target="#newCxc" className="collapsed">
                                <a href="#"><i className="far fa-closed-captioning fa-2x"></i>Cuentas Por Cobrar</a>
                            </li>
                            
                            <li data-toggle="#" data-target="#newCxcConsulta" className="collapsed">
                                <a href="#"><i className="far fa-newspaper fa-2x"></i>Consultas</a>
                            </li>
                            
                            <li data-target="#newMantenimiento" className="collapsed">
                                <a href="#"><i className="fas fa-cogs fa-2x"></i>Mantenimiento</a>
                            </li>
                            
                            <li data-target="#newSeguridad" className="collapsed">
                                <a href="#"><i class="far fa-user fa-2x"></i>Seguridad</a>
                            </li>
                            
                            <li data-target="#newSalir" className="collapsed" onClick={() => this._handleSalir()}>
                                <a href="#"><i className="fas fa-sign-out-alt fa-2x"></i>Salir</a></li>
                        </ul>
                    </div>
                </nav>

                <div id="newFacturacion" className="collapse">
                    
                    <div className="container-custom-menu menu-opcion1">
                        <h4>Facturacion</h4>
                        <hr/>
                        <i className="fa fa-money-bill-alt fa-5x"></i>
                    </div>
                
                    <div className="container-custom-menu menu-opcion2">
                        <h4>Cotizacion</h4>
                        <hr/>
                        <i className="fa fa-money-bill-alt fa-5x"></i>
                    </div>
                
                    <div className="container-custom-menu menu-opcion3">
                        <h4>Conduce</h4>
                        <hr/>
                        <i className="fa fa-money-bill-alt fa-5x"></i>
                    </div>
                
                    <div className="container-custom-menu menu-opcion4">
                        <h4>Compras</h4>
                        <hr/>
                        <i className="fa fa-money-bill-alt fa-5x"></i>
                    </div>
                </div>

                <div id="newCxc" className="collapse">
                    
                    <div className="container-custom-menu menu-opcion1">
                        <h4>Cobros</h4>
                        <hr/>
                        <i className="fa fa-money-bill-alt fa-5x"></i>
                    </div>
                
                    <div className="container-custom-menu menu-opcion2">
                        <h4>Nota de Credito</h4>
                        <hr/>
                        <i className="fa fa-money-bill-alt fa-5x"></i>
                    </div>
                
                    
                </div>

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