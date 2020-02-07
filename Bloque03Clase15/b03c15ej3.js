/*
    Este ejercicio debe correr en Node.

    Usa la función getRandomNumber (escrita abajo) para generar un número aleatorio con 9 decimales.
    Inventa un algoritmo para redondearlo, conservando de 1 a 8 decimales.
*/

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max-min+1) ) + min;
}

getRandomNumber(1000000000, 9999999999) / 1000000000;

//tu código va aquí vvv

//tu código va aquí ^^^

//eof
