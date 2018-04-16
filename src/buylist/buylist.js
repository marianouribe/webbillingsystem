import React, {Component} from 'react';
import './buylist.css';
import DataService from "../services/data-service";
import NotificationService, {NOTIF_BUYLIST_CHANGED} from '../services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';
import Calculos from "../calculos/calculos";

// import { NOTIF_WISHLIST_CHANGED } from '../services/notification-service';

let ns = new NotificationService();

let calcMonto = new Calculos();

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
        
        return <div>
            <ul className="list-group">{this.createBuyList()}</ul>
            {/* {this.props.children} */}
            <hr/>
            <div className="row">
                <div className="col-md-4 text-left"><span><b>Total</b></span></div>
                <div className="col-md-1 text-center"><span><b>:</b></span></div>
                <div className="col-md-4 text-right"><b>{calcMonto.sumaMonto(this.state.buyList)}</b></div>
            </div>
            <div className="row">
                <div className="col-md-4 text-left"><span><b>Itbis</b></span></div>
                <div className="col-md-1 text-center"><span><b>:</b></span></div>
                <div className="col-md-4 text-right"><b>{calcMonto.sumaItbis(this.state.buyList)}</b></div>
            </div>
            <div className="row">
                <div className="col-md-4 text-left"><span><b>Descuento</b></span></div>
                <div className="col-md-1 text-center"><span><b>:</b></span></div>
                <div className="col-md-4 text-right"><b>0.00</b></div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-4 text-left"><span><b>Total Neto</b></span></div>
                <div className="col-md-1 text-center"><span><b>:</b></span></div>
                <div className="col-md-4 text-right text-success font-weight-bold mb-3">{calcMonto.sumaTotalFactneto(this.state.buyList)}</div>
            </div>
          </div>;
    }
}

export default BuyList;