/*
    Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/

let opcion = true;
let comparacionesTotales = 0;
let igualesTotales = 0;

while (opcion == true) {
    let seleccion = parseInt(prompt('1 - Comenzar 2 - Salir'));
    if (seleccion == 1) {
        let numero1 = parseInt(prompt('Introduce el primer numero: '));
        let numero2 = parseInt(prompt('Introduce el segundo numero: '));

        if (numero1 > numero2) {
            alert(`El numero ${numero1} es mayor al numero ${numero2}.`);
            comparacionesTotales++;
        } else if (numero2 > numero1) {
            alert(`El numero ${numero2} es mayor al numero ${numero1}.`);
            comparacionesTotales++;
        } else if (numero1 == numero2) {
            alert('Ambos numeros son iguales.');
            comparacionesTotales++;
            igualesTotales++;
        } else {
            alert('Ingresa un valor valido.');
        }
    } else if (seleccion == 2) {
        opcion = false;
    }
}

let comparaciones = document.getElementById('comparaciones');
comparaciones.innerHTML = comparacionesTotales;

let iguales = document.getElementById('iguales');
iguales.innerHTML = igualesTotales;
