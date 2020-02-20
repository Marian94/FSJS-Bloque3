/*
    Este ejercicio debe correr en Node.

    Realiza un arreglo de 4 elementos, donde en cada elemento guardes una función.
    Estas funciones serán suma, resta, multiplicación y división.
    Debe ser posible llamar a las funciones usando el índice del arreglo.
*/

//tu código va aquí vvv
function suma(a, b){
    return a + b;
}
function resta(a, b){
    return a - b;
}
function multiplicacion(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}
let arreglo = [];
arreglo.push(suma(2,3));
arreglo.push(resta(-1,-5));
arreglo.push(multiplicacion(7,120));
arreglo.push(division(6,3));




//tu código va aquí ^^^

//eof
