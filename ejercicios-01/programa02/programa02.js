/*
    Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
    hasta introducir un numero negativo y ahi mostrar el resultado
*/

let sumaNumeros = 0;
let continua = 0;

while (continua >= 0) {
    let numero = parseInt(prompt('Ingresa un numero positivo: '));

    if (!isNaN(numero)) {
        if (numero >= 0) {
            sumaNumeros = sumaNumeros + numero;
        } else {
            continua = -1;
        }
    } else {
        alert('Debes ingresar un numero valido.');
    }
}

console.log('Numeros ingresados: ', sumaNumeros);
