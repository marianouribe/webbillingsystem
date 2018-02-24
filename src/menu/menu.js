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
                            <h2 clasName="navbar-brand mb-0"><i className = "fa fa-desktop"></i>WBSystem </h2>
                        </a>
                        
                        <form className="form-inline navbar-right my-2 my-lg-0">
                            <input className="form-control mr-sm-2 my-lg-0" type="text" placeholder="Buscar"/>
                            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </nav>
                
                <nav className = "navbar custom-navbar navbar-toggleable-md navbar-light bg-faded"> 
                    
                    <div  id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            
                                <li>
                                    <a href="#">
                                        <i className="fa fa-angle-right"></i>Facturar</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-angle-right"></i>Conduce</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-angle-right"></i>Devolución</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-angle-right"></i>Cotización</a>
                                </li>
                            
                                
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Link</a > 
                            </li> 
                                <li className = "nav-item active" > 
                                <a className="nav-link" href="#">Disabled</a> 
                            </li>
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