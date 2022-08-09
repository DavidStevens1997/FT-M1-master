'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  return parseInt(num, 2);
}

function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

/* function DecimalABinario(num =  76) {
  // tu codigo aca
  let binario = [];
  let resto = 0;
  let resultado = "";
  while (num > 0) { 
    resto = num%2;
    num = Math.floor(num/2)
     binario.push(resto);
     console.log('Viendo el numero $(num) / 2 = $(num) resto $(resto)');
  }
console.log('Binario sinprocesar ${binario}');
resultado = binario.reverse().join('');
console.log('Resultado $resultado}')
}
DecimalABinario()*/