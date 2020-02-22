/*
    Este ejercicio debe correr en Chrome.
    Necesitarás b03c14ej1.html.

    Dentro de la función messageClick,
    Agrega código para pedir su nombre al usuario,
    Guarda ese nombre en una variable.
    Después, despliega ese nombre en un saludo.
*/

function messageClick() {
    //tu código va aquí vvv
    /**
     * Inicializamos una variable de tipo constante "nombre", para recibir el dato ingresado por el usuario
     * Inicializamos una variable de tipo constante "validName", que verificara que el usuario ingrese correctamente el dato requerido
     * Inicializamos una variable de tipo let "message", que desplegara un mensaje ya sea de error o de bienvenida
     */
    const name = prompt("Escribe tu nombre", "");
    const validName = /^[a-zA-Z\s]*$/g;
    let message = "Porfavor, evita:\n*Dejar el nombre en blanco\n*Escribir numeros\n*Escribir caracteres especiales"; 
    //Se verifica que el nombre contenga datos
    if(name.replace(/ /g, "") !== ""){
        //Se verifica que los datos ingresados sean validos no incluyan numeros ni caracteres especiales)
        if(validName.test(name) === true){
            //Se despliega un mensaje de bienvenida
            message = `Hi ${name}, Welcome!`;
            alert(message);
        } //if validName
        else{
            //Se despliega un mensaje de error
            alert(message);
        }//else validName
    } //if name
     else{
         //Se despliega un mensaje de error
        alert(message);
    } // else name
    //tu código va aquí ^^^
}

//eof
