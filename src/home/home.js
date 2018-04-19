import React,{ Component } from "react";
//import ReactDOM from 'react-dom';
// import PageMenu from '../menu/menu';
import NavBar from '../navbar/navbar';
import Header from '../header/header';
import BillingMenu from "../billingMenu/billingMenu";
import Footer from '../footer/footer';
// import Login from '../login/login';
import Billing from "../billing/billing";
import Calculo from '../calculos/calculos';
// import { Script } from "vm";


class Home extends Component{
    
    render() {
        
        return (
            <div>
                <Header buycount={Calculo.buycount}/>
                <NavBar />
                <BillingMenu />
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

export default Home;
