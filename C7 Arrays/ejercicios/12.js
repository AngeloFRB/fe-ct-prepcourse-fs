function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const upperCase = array.map((char)=>char.toUpperCase())
  return upperCase
}

module.exports = convertirStringAMayusculas;
