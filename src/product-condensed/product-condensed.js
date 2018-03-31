import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

let ds = new DataService();

class ProductCondensed extends Component {

    constructor(props) {
        super(props);
        
        // this.habldeOnChangeMonto = this.habldeOnChangeMonto.bind(this);
    }

    removeProduct = (event) => {
        ds.removeBuyListItem(this.props.articulo);

        event.preventDefault();
    }
    
    render() {
        let l10nDO = new Intl.NumberFormat("es-DO", {
          style: "currency",
          currency: "DOP"
        });

        let precioArticulo = l10nDO.format(this.props.articulo.PrecioUnitarioArticulo);

        return <div className="pc-condensed">
            {/* <button type="button" class="close" aria-label="Close"
                onClick={(e) => this.removeProduct(e)}>
                 <span aria-hidden="true">&times;</span>
                </button> */}
            <div className="form-group row">
              <div className="col-md-2">
                <a href="#" className="btn btn-outline-danger" onClick={e => this.removeProduct(e)}>
                  X
                </a>
              </div>
              <div className="col-md-5">
                <p className="">
                  {this.props.articulo.DescripcionArticulo}
                </p>
              </div>
              <div className="col-md-2">
                <p className="">
                  <b>{precioArticulo}</b>
                </p>
              </div>
              <div className="col-md-3">
                <div class="quantity d-inline">
                  <input type="number" min="1" max="9" step="1" value="1" />
                  <button className="d-inline">+</button>
                  <button className="d-inline">-</button>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default ProductCondensed;

//list-group-item