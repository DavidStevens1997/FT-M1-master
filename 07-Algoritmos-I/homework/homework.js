'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Eb: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let a = 2;

  while(num > 1){
    if (num % a == 0) {
      array.push(a);
      num = num/a;
    }else{
      a++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let a = 0; a < array.length - 1; a++) {
    for (let b = 0; b < array.length; b++) {
      if (array[b] > array[b+1]) {
        [array[b], array[b+1]] = [array[b+1], array[b]]
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let a = 0; a < array.length; a++) {
    let numberToInsert = array[a];
    let b = a - 1
    while (b >= 0 && array[b] > numberToInsert) {
      array[b+1] = array[b]
      b = b-1
    }
    array[b+1] = numberToInsert
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for ( let a = 0; a < array.length; a++ ) {
    let min = a;
    for ( let i = a+1; i < array.length; i++ ) {
      if(array[i] < array[min]){
        min = i;
      }
    }
    if (a !== min) {
      let aux = array[a];
      array[a] = array[min];
      array[min] =aux;
    }
  }
  return array;
}


// No modificar nada debabo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
