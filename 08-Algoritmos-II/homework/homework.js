'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let aux = [];
  let pivot = array.pop();
  let n = array.length;
  for (let i = 0; i < n; i++) {
    if (array[i] <= pivot){
      left.push(array[i]);
    }
    else{
      right.push(array[i]);
    } 
  }
  return aux.concat(quickSort(left), pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  const mitad = Math.floor(array.length / 2);
  const left = array.slice(0,mitad)
  const right = array.slice(mitad)
  return margeTopDown(mergeSort(left), mergeSort(right));
}
function margeTopDown(left, right){
  const array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    } else{
      array.push(right.shift())
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
