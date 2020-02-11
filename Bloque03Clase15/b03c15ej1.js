/*
    Este ejercicio debe correr en Node.

    Realiza la siguiente operación en código:
    84 + 96 - 25 * 79 ** 2 * 59 % 69 + 21 / 53

    Antes de ejecutarlo, trata de hacer el cálculo (una operación a la vez) en el orden correcto.
    Así verás si comprendes bien el orden de operadores de JS.
    Recuerda leer el orden correcto en la documentación.

    Finalmente, imprime el resultado de la operación truncado a 2 decimales.
*/

//tu código va aquí vvv

// -->Por orden de jerarquia de operaciones, se realiza primero las exponentes
const exponentes = 79 ** 2;

// --> La multiplicacion, division y modulos tienen el mismo rango de jerarquia
// 84 + 96 - 25 * exponentes * 59 % 69 + 21 / 53
const multiplicacion = 25 * exponentes *59;
// 84 + 96 - multiplicacionA % 69 + 21 / 53
const modulo = multiplicacion % 69;
// 84 + 96 - modulo + 21 / 53
const division = 21 / 53;
// 84 + 96 - modulo + division

// -->Por ultimo, se realizan las sumas y restas
const resultado = 84 + 96 - modulo + division;

//La propiedad toFixed(#), conserva el numero de decimales deseados
console.log(resultado.toFixed(2));

//tu código va aquí ^^^

//eof
