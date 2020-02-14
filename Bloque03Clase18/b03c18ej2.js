/*
    Este ejercicio debe correr en Chrome.

    La variable calif representa la calificación de un alumno en una materia.
    Debe ser un número de 0 a 100.

    Realiza un programa que califique de la siguiente manera:
        de  0 a   9: vete a turismo
        de 10 a  59: tronaste
        de 60 a  69: panzaste
        de 70 a  89: ya eres libre
        de 90 a 100: nerd

    Si la calificación tiene decimales, contrólalos de alguna manera que te parezca adecuada.
*/

let calif = document.getElementById("term1");
let r = document.getElementById("divresultados");

function messageClick() {

    //usa calif.value para obtener el texto dentro del input
    //usa r.innerHTML para colocar el resultado en pantalla

    //tu código va aquí vvv
    //Valid number es la expresion regular que verificara que lo que ingrese el usuario sea coherente a lo que se este pidiendo, en este caso solo se pueden ingresar numeros y valores flotantes
    const validNumber = /^-?\d+(?:.\d+)?$/g;
    let message = "Porfavor, evita:\n*Escribir mal un número\n*Dejar la calificacion en blanco\n*Escribir letras y/o caracteres especiales"; 
    //Se verifica que el nombre contenga datos
    if(calif.value.replace(/ /g, "") !== ""){
        //Se verifica que los datos ingresados sean validos no incluyan numeros ni caracteres especiales)
        if(validNumber.test(calif.value) === true ){
            const calificacion = parseFloat(calif.value);
            if(calificacion <= 100){
                if (calificacion >= 0 && calificacion <= 9 ) message = "Vete a turismo";
                else if (calificacion >= 10 && calificacion <= 59) message = "tronaste";
                else if (calificacion >= 60 && calificacion <= 69) message = "panzaste";
                else if (calificacion >= 70 && calificacion <= 89) message = "ya eres libre";
                else if (calificacion >= 90 && calificacion <= 100) message = "nerd";
            }else{
                message = "La calificacion ingresada es mayor a 100";
            }
            alert(message);
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
