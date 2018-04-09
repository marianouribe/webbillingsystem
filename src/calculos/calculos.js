import React from 'react';

let lsumaTotal = 0;


class Calculo extends React.Component {

  constructor(props){
    super(props);
  }

  suma=()=>{
    let list=this.props.articulo.map(articulo=>{
      articulo.PrecioUnitarioArticulo;
    })

    return (list);
  }
  render() {
    // console.log(this.props.articulo.PrecioUnitarioArticulo);
    // console.log(this.props.articulo.map((articulo)=>{articulo.PrecioUnitarioArticulo}));

    return <div>
        <div className="text-left font-weight-bold mt-5 fa-border">
          <div className="row">
            <div className="col-sm-4">
              <p>Total: </p>
            </div>
            <div className="col-sm-3">
              <p className="custom-p">{this.suma()}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <p>Descuento: </p>
            </div>
            <div className="col-sm-3">
              <p className="custom-p">0.00</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <p>Itbis: </p>
            </div>
            <div className="col-sm-3">
              <p className="custom-p">0.00</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <p>Total Neto: </p>
            </div>
            <div className="col-sm-3">
              <p className="custom-p">0.00</p>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Calculo;