'use strict'

function resta  (anioActual,anioNacimiento) {
  let resta = ( anioActual-anioNacimiento);

  return resta;
}
let anioActual= Number (prompt("ingreseanioactual"));
let anioNacimiento= Number (prompt("ingreseanionacimiento"));

let edadCalculada = resta (anioActual,anioNacimiento);

alert("la edad es :"+edadCalculada + ".")
