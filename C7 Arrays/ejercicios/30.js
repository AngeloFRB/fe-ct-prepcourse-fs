function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let arr = []
  for(let i = 0; i < numeros.length; i++){
    if(arr.includes(numeros[i])){
      return numeros[i]
    }
    else{
      arr.push(numeros[i])
    }
  }
}

module.exports = encontrarElementoRepetido;