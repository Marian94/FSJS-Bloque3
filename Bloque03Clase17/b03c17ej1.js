/*
    Este ejercicio debe correr en Node.

    Trata de adivinar qué valor será guardado en a.
    Después, ejecuta el código para ver si tuviste razón.
*/

let a;
(a = 0) || (a = "") || (a = 10) || (a = undefined) || (a = 20) || (a = "hola");
/**
 * (a = 0) || (a = "") : ""
 * (a = "") || (a = 10) : 10
 * (a = 10) || (a = undefined) : 10
 * (a = 10) || (a = 20) : 10
 * (a = 10) || (a = "hola") : 10
 */
console.log(a);

//eof
