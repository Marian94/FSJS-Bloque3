/*
    Este ejercicio debe correr en Node.

    Antes de ejecutar el código que aparece debajo,
    determina cuál será el valor de a antes del console.log.
    determina qué imprimirá el console.log.

    Ejecuta el ejercicio para que compares tu respuesta.
*/

let a = 1;
a /= (a++)*(++a)+(--a)-(a++)*(a--);

/**
 * a = 1
 * (a++)*(++a) = 1 * 2 = 2;
 * (a++)*(a--) = 1 * 1 = 1;
 * (--a) = 0
 * por lo que: 
 * 2 + 0 - 1 = 1
 * 1 / 1  = 1.0
 * a/= 1 = 0;
 * RESPUESTA : 0
 */
console.log("hola " + (a + true) + " adiós");

//eof
