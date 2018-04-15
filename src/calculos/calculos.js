import React from 'react';

class Calculo {

  sumaMonto= (item)=>{
    let acumMonto=0;
    for (let x of item) {
        acumMonto += x.PrecioUnitarioArticulo
    }
      return acumMonto;
  }
  
}

export default Calculo;