import React, { Component } from 'react';
import './product.css';
import DataService from "../services/data-service";
import NotificationService, {NOTIF_BUYLIST_CHANGED} from '../services/notification-service';

let ds = new DataService();
let ns = new NotificationService();

class Product extends Component{

    constructor(props){
        super(props);

        this.state = {onBuyList: ds.itemOnBuyList()};
        //Bind functions
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onBuyListChanged = this.onBuyListChanged.bind(this);
    }

    componentDidMount(){
        ns.addObserver(NOTIF_BUYLIST_CHANGED, this, this.onBuyListChanged);
    }

    componentWillUnmount(){
        ns.removeObserver(this, NOTIF_BUYLIST_CHANGED);
    }

    onBuyListChanged(newBuyList){
        this.setState({onBuyList: ds.itemOnBuyList(this.props.articulo)});
    }

    onButtonClicked = (event) => {
        if (this.state.onBuyList){
            ds.removeBuyListItem(this.props.articulo);
        }else {
            ds.addBuyListItem(this.props.articulo)
        }

        event.preventDefault();
    }

    render(){

        var btnClass;

        if (this.state.onBuyList){
            btnClass = "btn btn-danger";
        }else {
            btnClass = "btn btn-outline-primary";
        }

         var _img;
         _img = "data:;base64," + this.props.articulo.Data

        return(
            <a href="#" onClick={(e) => this.onButtonClicked(e)}>
                <div className="row mb-2 product-detalle">
                    
                    <div className="col-md-2"><img className="img-detalle" src={_img} alt="Product" ></img></div>
                    <div className="col-md-7 pt-2">{this.props.articulo.DescripcionArticulo}</div>
                    <div className="col-md-2 pt-2">{this.props.articulo.PrecioUnitarioArticulo}</div>
                    <div className="col-md-1">
                    <button className={btnClass}>
                        {this.state.onBuyList ? "-" : "+"}</button></div>
                </div>
            </a>

        );
    }
}

export default Product;

// <img className="card-img-top" src={this.props.articulo.Data} alt="Product" ></img>

/*<div className="card product">
                
                <img className="card-img-top"  src={_img} alt="Product" ></img>

                <div className="card-block">
                    <p className="card-title">{this.props.articulo.DescripcionArticulo}</p>
                    <p className="card-text">Precio: ${this.props.articulo.PrecioUnitarioArticulo}</p>
                    
                </div>
              </div>
*/

