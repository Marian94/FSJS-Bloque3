/*
    Este ejercicio debe correr en Node.

    Realiza una función que calcule el factorial de un número.
    Debes devolver un mensaje de error si el número es menor a cero, mayor a 10 o si no es number.
    La función debe retornar el factorial ya calculado.
*/

//tu código va aquí vvv
function validacion(numero){
    const validNumber = /^-?\d+(?:.\d+)?$/g;
    let error;
    if(validNumber.test(numero) === true ){
        if(numero <=10 && numero >= 0){
            error = false;
        }else{
            console.log(`numero: ${numero} => No se puede ingresar numeros menores a 0 y mayores a 10.`);
            error = true;
        }
    }else{
        console.log(`numero= ${numero} -> No se ha ingresado un numero.`);
        error = true;
    }
    return error;
}
function factorial(numero){
    if(validacion(numero) === false){
        if(numero === 0){
            return 1;
        }
        else{
            console.log(`${numero} x`);
            return (numero * factorial(numero - 1));
        }
    }else{
        return "Error!";
    }
}
console.log(factorial(0)+"\n-------------------");
console.log(factorial(10)+"\n-------------------");
console.log(factorial("a")+"\n-------------------");
console.log(factorial(-1)+"\n-------------------");
console.log(factorial(11)+"\n-------------------");

//tu código va aquí ^^^

//eof
