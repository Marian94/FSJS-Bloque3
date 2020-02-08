/*
    Este ejercicio debe correr en Node.

    Tienes 3 valores: v1, v2 y v3.
    Convierte cada uno de ellos a number, string y boolean.
    Después, guarda cada uno en test y corre este ejercicio para ver el output.
*/

let v1 = "52.00"
let v2 = 0
let v3 = "hola"

let test;

//tu código va aquí vvv
/**
 * parseInt convierte el valor de una variable a un numero
 * toString() convierte el valor de una variable a una cadena
 * Boolean() convierte el valor de una variable a un booleano
 */
test = parseInt(v1);
console.log(test+" es del tipo "+typeof(test));
test = v1.toString();
console.log(test+" es del tipo "+typeof(test));
test = Boolean(v1);
console.log(test+" es del tipo "+typeof(test)+ '\n__________________________');

test = parseInt(v2);
console.log(test+" es del tipo "+typeof(test));
test = v2.toString();
console.log(test+" es del tipo "+typeof(test));
test = Boolean(v2);
console.log(test+" es del tipo "+typeof(test)+ '\n__________________________');

test = parseInt(v3);
console.log(test+" es del tipo "+typeof(test));
test = v3.toString();
console.log(test+" es del tipo "+typeof(test));
test = Boolean(v3);
console.log(test+" es del tipo "+typeof(test)+ '\n__________________________');

//tu código va aquí ^^^


//eof
