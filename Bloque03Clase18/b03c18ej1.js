/*
    Este ejercicio debe correr en Chrome.

    Realiza un programa que compare las variables a y b (que obtienes de los inputs).
    Si a fuera mayor, imprimir que a es mayor.
    Si b fuera mayor, imprimir que b es mayor.
    Si a y b son iguales, imprimir que son iguales.
    ¿Puedes controlar también si son de tipo distinto?
    ¿Puedes controlar si no son números?
*/

let term1 = document.getElementById("term1");
let term2 = document.getElementById("term2");
let r = document.getElementById("divresultados");

function messageClick() {

    a = term1.value;
    b = term2.value;

    //asigna r.innerHTML al valor que quieras imprimir en pantalla.
    //tu código va aquí vvv

    //checkText es la expresion regular que verificara que lo que ingrese el usuario sea de tipo numero o string
    const checkText = /^-?\d+(?:\.\d+)?$/;
    let message = "";
    let number1;
    let number2;
    //Se verifica que los datos ingresados sean numeros
    number1 = (checkText.test(a)) ? true : false;
    number2 = (checkText.test(b)) ? true : false;
    
    message += `${a} numero: ${number1}   /`;
    message += `${b} numero: ${number2}   /`;

    if( a < b){
        message += `${b} es el valor mayor.`;
    }else if (a > b){
        message += `${a} es el valor mayor.`;
    }else{
        message += `${a} y ${b} es el mismo valor.`;
    }

    r.innerHTML = message;
    //tu código va aquí ^^^
}

//eof
