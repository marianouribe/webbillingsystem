import React, {Component} from 'react';
import './buylist.css';
import DataService from "../services/data-service";
import NotificationService, {NOTIF_BUYLIST_CHANGED} from '../services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';
import Calculos from "../calculos/calculos";
import Header from '../header/header'

// import { NOTIF_WISHLIST_CHANGED } from '../services/notification-service';

let ns = new NotificationService();

let ca = new Calculos();

class BuyList extends Component {

    constructor(props){
        super(props);

        this.state = {buyList:[]};
        
        //Bind functions
        this.createBuyList = this.createBuyList.bind(this);
        this.onBuyListChanged = this.onBuyListChanged.bind(this);
    }
    
    componentDidMount(){
        ns.addObserver(NOTIF_BUYLIST_CHANGED, this, this.onBuyListChanged);
    }

    componentWillUnmount(){
         ns.removeObserver(this, NOTIF_BUYLIST_CHANGED);
    }

    onBuyListChanged(newBuyList){
        this.setState({buyList: newBuyList});

    }
    createBuyList = () => {
        const list = this.state.buyList.map((articulo) => 
            <ProductCondensed articulo = {articulo} key={articulo.CodigoArticulo}/>
            
        );

        return (list);
    }
   
    render() {
        ca.calculoFactura(this.state.buyList)
        return <div className="billing-form buylist pt-4">

            <div className="row">
                <div className="col-md-10"><h3 className="">Seleccionados </h3></div>
                <div className="col-md-2"><i className="fas fa-shopping-cart fa-lg mt-2">{ca.buyCount()}</i></div>
            </div>
                        
            <ul className="list-group total-custom border-left-0 border-right-0 border-bottom-0 pt-2">{this.createBuyList()}</ul>
            {/* {this.props.children} */}
            <br/>
            
            <div className="total-custom border-left-0 border-right-0 border-bottom-0 pt-2">
                <div className="row">
                    <div className="col-md-4 text-left"><span><b>Facturado</b></span></div>
                    <div className="col-md-1 text-center"><span><b>:</b></span></div>
                    <div className="col-md-5 text-right"><b>{ca.sumaMonto()}</b></div>
                    
                </div>
                <div className="row">
                    <div className="col-md-4 text-left"><span><b>Itbis</b></span></div>
                    <div className="col-md-1 text-center"><span><b>:</b></span></div>
                    <div className="col-md-5 text-right"><b>{ca.sumaItbis()}</b></div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-left"><span><b>Descuento</b></span></div>
                    <div className="col-md-1 text-center"><span><b>:</b></span></div>
                    <div className="col-md-5 text-right"><b>0.00</b></div>
                </div>
                <div className="total-custom border-left-0 border-right-0 border-bottom-0 mt-3 text-primary">
                    <div className="row">
                        <div className="col-md-4 text-left"><span><b>Total Neto</b></span></div>
                        <div className="col-md-1 text-center"><span><b>:</b></span></div>
                        <div className="col-md-5 text-right font-weight-bold mb-3">{ca.sumaTotalFactneto()}</div>
                    </div>
                </div>
            </div>
            {/* <Header buycount={this.state.buyList}/> */}
          </div>;
    }
}

export default BuyList;