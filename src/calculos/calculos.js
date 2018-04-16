import React from 'react';

const l10nDO = new Intl.NumberFormat("es-DO", {
  style: "currency",
  currency: "DOP"
});

const itbis = 0.18;

class Calculo {
  
  sumaMonto= (item)=>{
    let acumMonto = 0.0;
    for (let x of item) {
      acumMonto += x.PrecioUnitarioArticulo / (itbis + 1);
    }
      return l10nDO.format(acumMonto);
  }

  sumaItbis=(item)=>{
    let acumItbis = 0.0;
    for (let x of item) {
      acumItbis += (x.PrecioUnitarioArticulo / (itbis + 1)) * (itbis);
    }
        
    return l10nDO.format(acumItbis);
  }
  
  sumaTotalFactneto=(item)=>{
    let totalFactNeto = 0.0;
    totalFactNeto += this.sumaMonto(item) + this.sumaItbis(item);
    return totalFactNeto;
  }
}

export default Calculo;