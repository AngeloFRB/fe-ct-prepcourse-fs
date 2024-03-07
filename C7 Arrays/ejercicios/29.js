function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length === 0){
    return null
  }
  const n = numeros.length + 1;
  const sumaEsperada = (n * (n + 1))/2;
  const sumaReal = numeros.reduce((acc, num)=>acc + num , 0);
  const numeroFaltante = sumaEsperada - sumaReal;
  return numeroFaltante
}

module.exports = encontrarNumeroFaltante;