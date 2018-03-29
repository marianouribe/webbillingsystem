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
              <div className="col-md-8">
                <p>{this.props.articulo.DescripcionArticulo}</p>
              </div>
              <div className="col-md-2">
                <p>
                  <b>${this.props.articulo.PrecioUnitarioArticulo}</b>
                </p>
              </div>
            </div>
            
          </div>;
    }
}

export default ProductCondensed;

//list-group-item