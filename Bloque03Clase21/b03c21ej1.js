/*
    Este ejercicio debe correr en Node.

    En ejercicios anteriores realizaste la tabla de multiplicar de un número.
    Esta vez, envuelve ese código en una función que pida un número como argumento.
    No es necesario que la función devuelva nada.
    Finalmente debe ser posible llamar la función con cualquier valor y obtener su tabla de multiplicar.
*/

//tu código va aquí vvv
function tablaMultiplicar(numero){
    const validNumber = /^-?\d+(?:.\d+)?$/g;
    if(validNumber.test(numero) === true ){
        for(let i = 0; i <= 10; i++){
            console.log(`${numero} x ${i} = ${numero*i}`);
        }
    }else{
        console.log("No se ha ingresado un numero.")
    }
    console.log("-----------------------");
}

tablaMultiplicar(2);
tablaMultiplicar(10);
tablaMultiplicar("a");
//tu código va aquí ^^^

//eof
