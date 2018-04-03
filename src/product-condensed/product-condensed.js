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
            <div className="row">
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
              <div className="col-md-2 mt-2">
                <p className="">
                  <b>{precioArticulo}</b>
                </p>
              </div>
              <div className="col-md-3">
                <input type="number" className="form-control" min="1"/>
              </div>
            </div>
            
          </div>;
    }
}

export default ProductCondensed;

//list-group-item