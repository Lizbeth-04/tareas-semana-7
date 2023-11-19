function multiplicacionConSumas(multiplicador, multiplicando) {

    let suma = 0;

    
    for (let i = 0; i < multiplicador; i++) {
        suma=suma + multiplicando
    }

    
    return suma;
}


let multiplicador = Number(prompt("ingrese un numero"));
let multiplicando = Number(prompt ("ingrewse numero"));
let=resultado= multiplicacionConSumas(multiplicador,multiplicando);

alert("El resultado de la multiplicación es:" +resultado);
