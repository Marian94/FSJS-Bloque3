/*
    Este ejercicio debe correr en Node.

    Usa la función getRandomNumber(0,100) para generar 10 números aleatorios.
    A cada uno de ellos, calcúlale su módulo 2.
    imprime en pantalla cada número junto con el resultado del módulo.
    ¿Puedes interpretar estos resultados para saber si cada número es par o impar?
*/

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max-min+1) ) + min;
}

//tu código va aquí vvv

//Esta funcion imprime el resultado si es un numero par (result = 0) o impar (result = 1)
function parImpar(result, randomNumber){
    if( resultado != 1){
    console.log(`${randomNumber} es par`)
    } else{
    console.log(`${result} es impar`)
    }
}

//Se crea dentro de un bucle (de 10 vueltas), para generar 10 numeros aleatorios 
for( let i = 0; i < 10; i++){
    const randomNumber = getRandomNumber(0, 100);
    // Se toma el numero generado y se hace la operacion del modulo (%) para ver si es numero par o impar
    const result = numeroRandom % 2;
    //Se imprimen los resultados
    parImpar(result, randomNumber);
}


//tu código va aquí ^^^

//eof
