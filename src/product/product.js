import React, { Component } from 'react';
import './product.css';
import DataService from "../services/data-service";
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

let ds = new DataService();
let ns = new NotificationService();

class Product extends Component{

    constructor(props){
        super(props);

        this.state = {onWishList: ds.itemOnWishList()};
        //Bind functions
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount(){
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount(){
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWihsList){
        this.setState({onWishList: ds.itemOnWishList(this.props.articulo)});
    }

    onButtonClicked = () => {
        if (this.state.onWishList){
            ds.removeWishListItem(this.props.articulo);
        }else {
            ds.addWishListItem(this.props.articulo)
        }
    }

    render(){

        var btnClass;

        if (this.state.onWishList){
            btnClass = "btn btn-danger";
        }else {
            btnClass = "btn btn-primary";
        }

         var _img;
         _img = "data:;base64," + this.props.articulo.Data

        return(
            <div className="card product">
                
                <img className="card-img-top" src={_img} alt="Product" ></img>

                <div className="card-block">
                    <h4 className="card-title">{this.props.articulo.DescripcionArticulo}</h4>
                    <p className="card-text">Precio: ${this.props.articulo.PrecioUnitarioArticulo}</p>
                    <a href="#" onClick={() => this.onButtonClicked()} className={btnClass}>
                    {this.state.onWishList ? "Remove From Wishlist" : "Add To Cart"}</a>
                </div>
            </div>
        );
    }
}

export default Product;

// <img className="card-img-top" src={this.props.articulo.Data} alt="Product" ></img>