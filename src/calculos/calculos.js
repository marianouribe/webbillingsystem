import React from 'react';

const l10nDO = new Intl.NumberFormat("es-DO", {
  style: "currency",
  currency: "DOP"
});

const itbis = 0.18;
let acumMonto;
let acumItbis;
let totalNeto;

class Calculo {
  
  calculoFactura=(item)=>{
    acumMonto=0.00;
    acumItbis=0.00;
    totalNeto = 0.00;
    for (let x of item) {
      acumMonto += x.PrecioUnitarioArticulo / (itbis + 1);
      acumItbis += acumMonto * itbis;
    }
    totalNeto = acumMonto + acumItbis;
  }

  sumaMonto=()=>{
    return l10nDO.format(acumMonto);
  }

  sumaItbis=()=>{
    return l10nDO.format(acumItbis);
  }
  
  sumaTotalFactneto=()=>{
    return l10nDO.format(totalNeto);
  }
}

export default Calculo;