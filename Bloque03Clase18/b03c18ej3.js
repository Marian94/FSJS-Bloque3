/*
    Este ejercicio debe correr en Chrome.

    Realiza el mismo reto del ejercicio 2, pero esta vez usando sólo expresiones ternarias anidadas.
*/

let calif = document.getElementById("term1");
let r = document.getElementById("divresultados");

function messageClick() {

    //usa calif.value para obtener el texto dentro del input
    //usa r.innerHTML para colocar el resultado en pantalla

    //tu código va aquí vvv
    const validNumber = /^-?\d+(?:.\d+)?$/g;
    let message = "Porfavor, evita:\n*Escribir mal un número\n*Dejar la calificacion en blanco\n*Escribir letras y/o caracteres especiales"; 
    //Se verifica que el nombre contenga datos
    if(calif.value.replace(/ /g, "") !== ""){
        //Se verifica que los datos ingresados sean validos no incluyan numeros ni caracteres especiales)
        if(validNumber.test(calif.value) === true ){
            const calificacion = Math.round(parseFloat(calif.value)); 
            if(calificacion <= 100){
                message = (calificacion >= 0 && calificacion <= 9) ? "Vete a turismo"
                : (calificacion >= 10 && calificacion <= 59) ? "tronaste"
                : (calificacion >= 60 && calificacion <= 69) ? "panzaste"
                : (calificacion >= 70 && calificacion <= 89) ? "ya eres libre"
                : (calificacion >= 90 && calificacion <= 100) ? "nerd"
                : "";
            }else{
                message = "La calificacion ingresada es mayor a 100";
            }
            r.innerHTML = message;s
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
