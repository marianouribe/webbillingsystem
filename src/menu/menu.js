import React,{ Component} from "react";
import ReactDOM from 'react-dom';

// import {Route, Link} from 'react-router-dom';

import NavBar from '../navbar/navbar';
import Header from '../header/header';
import BillingMenu from "../billingMenu/billingMenu";
import Login from '../login/login';
import App from '../App/App';
import Footer from '../footer/footer';

import { Script } from "vm";

class Menu extends Component{

    constructor (props){
        super(props);

        this.state = {navbarClassMenu: "nav flex-column",organizations: null};

    }
    
    componentDidMount(){
        this.setState({navbarClassMenu:"nav flex-column"});
    }

    componentWillMount(){
        this.setState({navbarClassMenu:"nav flex-column"});
    }

    
    _handleSalir = () =>{
        // ReactDOM.render(<Login />, document.getElementById('root'));
    }

    render() {
        
        return (
            
            <div>
                
                <Header />
                <NavBar />
                <div id="newFacturacion" className="collapse">
                    <BillingMenu />
                </div>
                
                <Footer />
                
            </div>
            
        );
    }
}

export default Menu;
