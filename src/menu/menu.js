import React,{ Component } from "react";
//import ReactDOM from 'react-dom';
import PageMenu from '../menu/menu';
import NavBar from '../navbar/navbar';
import Header from '../header/header';
import BillingMenu from "../billingMenu/billingMenu";
import Footer from '../footer/footer';
import Login from '../login/login';
import Billing from "../billing/billing";

import { Script } from "vm";
import {BrowserRouter} from 'react-router-dom';

class Menu extends Component{
    
    render() {
        
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <NavBar />
                    <BillingMenu />
                    
                    <Footer />
                    
                </div>
            </BrowserRouter>
        );
    }
}

export default Menu;
