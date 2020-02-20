/*
    Este ejercicio debe correr en Node.

    Realiza una función anónima que sume 2 números.
    Guarda una copia de esa función en una variable.
    Guarda otra copia dentro de un arreglo.
    Comprueba que ambas copias funcionen.
*/

//tu código va aquí vvv

const a = function (a, b){
   return a + b;
}
let b = a(1,3);
console.log(b);
const arr = [];
arr.push(a);
console.log(arr[0](2,6));
//tu código va aquí ^^^

//eof
