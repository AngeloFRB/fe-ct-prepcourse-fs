function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = resultadosTest.reduce((sum, element)=> sum + element, 0)
  return suma/resultadosTest.length
}

module.exports = promedioResultadosTest;
