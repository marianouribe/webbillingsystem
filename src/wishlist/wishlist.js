import React, {Component} from 'react';
import './wishlist.css';
import DataService from "../services/data-service";
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';
// import { NOTIF_WISHLIST_CHANGED } from '../services/notification-service';

let ns = new NotificationService();
class WishList extends Component {

    constructor(props){
        super(props);

        this.state = {wishList:[]};
        
        //Bind functions
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);

        // this.state = {wishList:[
            // {
            //     title:"Bologna Killer",
            //     price:23.99,
            //     _id:"123"
            // },
            // {
            //     title:"Foo Man Chu",
            //     price:4.54,
            //     _id:"456"
            // },
            // {
            //     title:"Pipe Dream",
            //     price:100,
            //     _id:"789"
            // }
        // ]};
                
    }

    componentDidMount(){
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount(){
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList){
        this.setState({wishList: newWishList});
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) => 
            <ProductCondensed product = {product} key={product.IdArticulo}/>
        );

        return (list);
    }
    render() {
        return (
            <div className="card">
                <div className= "card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default WishList;