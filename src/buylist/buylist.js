import React, {Component} from 'react';
import './buylist.css';
import DataService from "../services/data-service";
import NotificationService, {NOTIF_BUYLIST_CHANGED} from '../services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';
// import { NOTIF_WISHLIST_CHANGED } from '../services/notification-service';

let ns = new NotificationService();
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
            <ProductCondensed articulo = {articulo} key={articulo.IdArticulo}/>
        );

        return (list);
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.createBuyList()}
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default BuyList;