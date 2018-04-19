import React from 'react';

const itbis = 0.18;
let acumMonto;
let acumItbis;
let totalNeto;
let buycount;

const l10nDO = new Intl.NumberFormat("es-DO", {
  style: "currency",
  currency: "DOP"
});

class Calculo {
  
  calculoFactura=(item)=>{
    acumMonto=0.00;
    acumItbis=0.00;
    totalNeto = 0.00;
    buycount = 0.00;
    for (let x of item) {
      acumMonto += x.PrecioUnitarioArticulo / (itbis + 1);
      acumItbis += acumMonto * itbis;
      buycount += 1;
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

  buyCount=()=>{
    return buycount;
  }
}

export default Calculo;