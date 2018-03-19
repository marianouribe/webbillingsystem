import React,{ Component} from "react";
import ReactDOM from 'react-dom';
import './menu.css';

import Login from '../login/login';
import App from '../App/App';
import Factutrar from '../facturar/facturar';
import { Script } from "vm";


class Menu extends Component{

    constructor (props){
        super(props);

        this.state = {navbarClassMenu: "nav flex-column"};
        // this._buttonDropDownClick = this._buttonDropDownClick.bind(this);
    }

    componentDidMount(){
        this.setState({navbarClassMenu:"nav flex-column"});
    }

    componentWillMount(){
        this.setState({navbarClassMenu:"nav flex-column"});
    }

    _handleFacturar = () =>{
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    _handleSalir = () =>{
        ReactDOM.render(<Login />, document.getElementById('root'));
    }

    _buttonDropDownClick=()=>{
        if (this.state.navbarClassMenu === "nav flex-column"){
            this.setState({navbarClassMenu:this.state.navbarClassMenu+" responsive"});
        }else {
            this.setState({navbarClassMenu:"nav flex-column"});
        }
        
    }


    // <div className="container-fluid">
    //                 <nav className = "navbar navbar-toggleable-md navbar-inverse bg-faded"> 
    //                     <a className = "navbar-brand" href = "#" > 
    //                         <h2 clasName="navbar-brand mb-0"><i className = "fa fa-desktop"></i>  WB System</h2>
    //                     </a>
    //                     <button class="navbar-toggler custom-toggler navbar-toggler-right" 
    //                         onClick ={()=>this._buttonDropDownClick()}>
    //                         <span class="navbar-toggler-icon"></span>
    //                     </button>
    //                     <form className="form-inline navbar-right my-2 my-lg-0">
    //                         <div className="form-inline icon-search-custom input">
    //                             <i className="fas icon-search fa-search" onClick={()=>this._buttonDropDownClick()}></i>
    //                             <input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>                                
    //                         </div>
    //                     </form>

    //                 </nav>
    //             </div>

    // <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    render() {
        return (
            <div>
                <div className="l-nav">
                    <div className="title-menu" id="header">
                        
                        <form className="form-inline navbar-right">
                            <div className="form-inline icon-search-custom input">
                                <i className="fas icon-search fa-search" onClick={()=>this._buttonDropDownClick()}></i>
                                <input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>                                
                            </div>
                        </form>
                    </div>
                </div>

                <div className="container-fluid">
                    
                    <div className="l-nav">
                        <h2>WBSystem</h2>
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
                
                <div className="l-container-menu">
                    <div className="row">
                        <div className="col-sm-12">
                                <div id="newFacturacion" className="collapse">
                                    <div className="container-custom-menu" onClick={()=>this._handleFacturar()}>
                                        <i className="fas fa-dollar-sign fa-3x"></i>
                                        <hr/>
                                        <h4>Facturación</h4>
                                    </div>
                                    <div className="container-custom-menu">
                                        <i className="fa fa-shopping-cart fa-3x"></i>
                                        <hr/>
                                        <h4>Compras</h4>
                                    </div>

                                    <div className="container-custom-menu" onClick={()=>this._handleFacturar()}>
                                        <i className="fas fa-file-alt fa-3x"></i>
                                        <hr/>
                                        <h4>Cotización</h4>
                                    </div>
                        
                                    <div className="container-custom-menu">
                                        <i className="far fa-file-alt fa-3x"></i>
                                        <hr/>
                                        <h4>Conduce</h4>
                                    </div>
                                    
                                    <div className="container-custom-menu">
                                        <i className="far fa-newspaper fa-3x"></i>
                                        <hr/>
                                        <h4>Ventas</h4>
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
                    </div>
                    
                </div>
                
                <footer id="footer" >
                    <div className="row">
                        <div className="col-sm-3">
                            <i className="far fa-copyright"/><span className="text-muted"> CopyRigth 2018.</span>
                        </div>
                        <div className="col-sm-3">
                            <i className="fab fa-whatsapp"/><span className="text-muted"> 849-849-0385.</span>
                        </div>
                        <div className="col-sm-3">
                            <i className="far fa-envelope"/><span className="text-muted"> umariano@hotmail.com.</span>
                        </div>
                    </div>
                </footer> 
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


// <footer className="footer bg-fa-inverse">
//     <div className="container-fluid btn-primary" >
//         <div className="row">
//             <div className="col-sm-12 col-lg-3">
//                 <i className = "fa fa-desktop fa-3x"></i>
//             </div>
//         </div>
        
//     </div>
// </footer>