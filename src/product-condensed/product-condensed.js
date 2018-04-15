import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './product-condensed.css';
import DataService from '../services/data-service';

import Calculos from "../calculos/calculos";

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
              <div className="col-md-7">
                <p className="">
                  {this.props.articulo.DescripcionArticulo}
                </p>
              </div>
              <div className="col-md-3 mt-2">
                <p className="">
                  <b>{precioArticulo}</b>
                </p>
              </div>
              
                {/* <div className="stepper">
                  <a className="btn btn-primary" href="#"><i className="fa fa-minus"></i></a>
                  <input type="hidden" id="adultPax" value="1"/><span className="pax-number adult-pax-amount">1</span>
                  <a className="btn btn-primary" href="#"><i className="fa fa-plus"></i></a>
                </div> */}
             
            </div>
            
            

          </div>;
    }
}

//para definir los tipos, requeridos, etc. de los props
ProductCondensed.propTypes= {
  //PrecioUnitarioArticulo : PropTypes.number
  articulo : PropTypes.object.isRequired
}

export default ProductCondensed;

//list-group-item