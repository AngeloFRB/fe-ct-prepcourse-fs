function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  const dateObject = new Date(fecha);
  return !isNaN(dateObject.getTime())
}

module.exports = esFechaValida;