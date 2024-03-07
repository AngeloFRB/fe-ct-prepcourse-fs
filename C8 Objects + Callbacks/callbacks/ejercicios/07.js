function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const result = arrayOfStrings.map(char=>char.toLowerCase()).filter(char=>char.startsWith('a'))
   return result
}

module.exports = filter;
