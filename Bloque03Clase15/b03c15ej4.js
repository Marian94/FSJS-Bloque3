/*
    Este ejercicio debe correr en Node.

    Antes de ejecutar el código que aparece debajo,
    determina cuál será el valor de a antes del console.log.
    determina qué imprimirá el console.log.

    Ejecuta el ejercicio para que compares tu respuesta.
*/

let a = 1;
 
a /= (a++)*(++a)+(--a)-(a++)*(a--); 
console.log(a);
/**
 * a = 1
 * a /= = 1 =/=; a=1;
 * (a++) = 1; a=2
 * (++a) = 3; a=3
 * (--a) = 2; a=2
 * (a++) = 2; a=3
 * (a--) = 3; a=2
 * 1*3+2-2*3
 * 3+2-6
 * 5-6
 * -1
 * 1 /= -1
 * -1
 *  */
console.log("hola " + (a + true) + " adiós");

//eof
