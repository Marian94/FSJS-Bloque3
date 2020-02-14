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
    let typeA = parseFloat(a);
    let typeB = parseFloat(b);
    //tu código va aquí vvv
    let message = "";
    message += `${typeof typeA}  ${typeA}\n`;
    message += `${typeof typeB}  ${typeB}`;
    
    /*
    if( a < b){
        message += `${b} es el valor mayor.`;
    }else if (a > b){
        message += `${a} es el valor mayor.`;
    }else{
        message += `${a} y ${b} es el mismo valor.`;
    }*/

    r.innerHTML = message;
    //tu código va aquí ^^^
}

//eof
