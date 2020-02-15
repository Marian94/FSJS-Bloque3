/*
    Este ejercicio debe correr en Chrome.

    Colocar un número del 1 al 10 en la variable num.
    Imprimir la tabla de multiplicar (del 0 al 10) de ese número.
*/

let num = document.getElementById("term1");
let res = document.getElementById("divresultados");

function messageClick() {

    //asigna a res.innerHTML el texto que contiene la tabla de multiplicar ya resuelta

    let n = num.value;
    //tu código va aquí vvv
    //Valid number es la expresion regular que verificara que lo que ingrese el usuario sea coherente a lo que se este pidiendo, en este caso solo se pueden ingresar numeros y valores flotantes
    const validNumber = /^-?\d+(?:.\d+)?$/g;
    let message = "Porfavor, evita:\n*Escribir mal un número\n*Dejar en blanco la respuesta\n*Escribir letras y/o caracteres especiales"; 
    //Se verifica que el dato a ingresar no se deje en blanco
    if(n.replace(/ /g, "") !== ""){
        //Se verifica que los datos ingresados sean validos (numeros y flotantes)
        if(validNumber.test(n) === true ){
            const numeroMul = Math.round(parseFloat(n)); 
            let tabla = "";
            if(numeroMul <= 10){
               for(let i = 0; i<=10; i++){
                    tabla += `${n} x ${i} = ${n*i}\n`;
               }
            }else{
                tabla = "El numero a multiplicar ingresada es mayor a 10";
            }
            alert(tabla);
        } //if validNumber
        else{
            //Se despliega un mensaje de error
            alert(message);
        }//else validNumber
    } //if name
     else{
         //Se despliega un mensaje de error
        alert(message);
    } // else name
    

    //tu código va aquí ^^^
}

//eof
