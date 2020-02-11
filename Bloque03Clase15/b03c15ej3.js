/*
    Este ejercicio debe correr en Node.

    Usa la función getRandomNumber (escrita abajo) para generar un número aleatorio con 9 decimales.
    Inventa un algoritmo para redondearlo, conservando de 1 a 8 decimales.
*/

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max-min+1) ) + min;
}
//tu código va aquí vvv
function getRandomDecimals(number, decimals){
    console.log(`Numero: ${number}`);
    console.log(`Trunca todos los decimales (trunc): ${Math.trunc(number)}`);
    console.log(`Redondea hacia arriba quitando todos los decimales (ceil): ${Math.ceil(number)}`);
    console.log(`Redondea hacia abajo quitando todos los decimales (floor): ${Math.floor(number)}`);
    console.log(`Redondea de forma estándar quitando todos los decimales (round): ${Math.round(number)}`);
    console.log(`Mostrar numero con ${decimals} decimales (el numero de decimales es random): ${number.toFixed(decimals)}`);
}
const randomNumber = getRandomNumber(1000000000, 9999999999) / 1000000000;
const randomDecimals = getRandomNumber(1, 8);

getRandomDecimals(randomNumber,randomDecimals)
//tu código va aquí ^^^

//eof
