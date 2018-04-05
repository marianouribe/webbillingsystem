import React from 'react';

class Calculo extends React.Component{

    render(){
        return <div className="font-weight-bold mt-3 mr-3">
            <div className="row">
              <div className="col-md-6 text-right">
                <p>Total: </p>
              </div>
              <div className="col-md-6 text-right">
                <p className="custom-p">
                  {this.props.articulo.CodigoArticulo}
                </p>
              </div>
            </div>
          </div>;
    }
}

export default Calculo;