import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

let ds = new DataService();
class ProductCondensed extends Component {

    constructor(props) {
        super(props);
        
        //Bind
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = (event) => {
        ds.removeBuyListItem(this.props.articulo);

        event.preventDefault();
    }
    
    render() {
        return (
            <li className="list-group-item pc-condensed">
                {/* <button type="button" class="close" aria-label="Close"
                onClick={(e) => this.removeProduct(e)}>
                 <span aria-hidden="true">&times;</span>
                </button> */}
                <a href="#" className="btn btn-outline-danger" onClick={(e) => this.removeProduct(e)}>X</a>
                <p>{this.props.articulo.DescripcionArticulo} | <b>${this.props.articulo.PrecioUnitarioArticulo}</b></p>
            </li>
        );
    }
}

export default ProductCondensed;