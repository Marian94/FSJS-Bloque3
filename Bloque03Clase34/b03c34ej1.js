/*
    Este ejercicio debe correr en Node.

    Crea cinco funciones que operen sobre un sólo valor.
    NO deben ser arrow functions.

    Crea algunos arreglos con valores cualquiera.

    Aplica tus funciones a los arreglos utilizando funciones funcionales.

    Comprueba lo sencillo y corto que se vuelve el código al usarlas.
*/

//tu código va aquí vvv

function pares(n){
    return (n % 2 === 0)? `${n} es par` : `${n} no es par`;
}
function positivo(n){
    return n > 0;
}
function triplica(n){
    return n * 3;
}
function adulto(n){
    return (n >= 18)? n : "No es mayor";
}
function sumaFinal(n1,n2,n3,n4){
   return n1+n2+n3+n4;
}
console.log(pares(5));
console.log(pares(4));
console.log(pares(3));
console.log(pares(2));
let arr = [5,4,3,2,1];
arr.forEach( n =>{
     (n % 2 === 0)? console.log( `${n} es par`) : console.log( `${n} no es par`);
});



console.log(positivo(25));
console.log(positivo(-25));
arr = [25,14,13,-22,21];
console.log(arr.every(positivo));
arr = [25,14,13,22,21];
console.log(arr.every(positivo));


console.log(triplica(3));
console.log(triplica(9));
console.log(triplica(21));
console.log(arr.map(n =>{
    return n*3;
}));


console.log(adulto(21));
console.log(adulto(2));
arr = [21, 2, 14, 18];
console.log(arr.filter( n =>{
    return n >= 18;
}));


console.log(sumaFinal(1,6,7,8));
arr = [1,6,7,8]
console.log(arr.reduce( (n,total) =>{
    return total + n;
}));
//tu código va aquí ^^^

//eof
