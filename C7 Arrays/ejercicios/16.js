function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let result = []
  for(let i = 0; i < array.length; i++){
    result.push(array[i] * i)
  }
  return result
}

module.exports = multiplicarElementosPorIndice;
