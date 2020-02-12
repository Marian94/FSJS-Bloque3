/*
    Este ejercicio debe correr en Node.

    Este ejercicio tiene varios errores.

    ¿Puedes identificarlos y corregirlos?

    Puntos extra si corriges los errores de runtime con bloques try-catch.
*/

//tu código va aquí vvv
try{
    console.log("si esto se imprime, ya no hay errores de compilación");

    /**
     * Las comillas para que un valor sea string tienen que se '', "", ``, ademas a una variable definida no se le puede asignar otro valor.
     */
    //null = “Humberto González Santos”;
    
    //slice() nos sirve para obtener un pedazo de un string
    //lee la documentación:
    //https://www.w3schools.com/jsref/jsref_slice_string.asp
    /**
     * primernombre no tiene valor, por lo que primernombre.slice() no funciona ya que no existe un valor al cual realizar la funcion.
     * slice puede tener 1 o 2 parametros, en este caso solo tiene una , y despues un 12, falta el primer parametro 
     */
    //const primernombre = primernombre.slice(,12);

    /**
     * No puedes cambiar el valor de una constante
     */
    //const primernombre = "Nombre: "
    //primernombre = "El primer nombre es González";

    /**
     * Posible solucion al programa.
     */

    let primernombre2 = "Nombre: ";
    primernombre2 = "El primer nombre es González";
    const primernombre = primernombre2.slice(0,12);
    console.log(primernombre);

}catch(e){
    console.log(e);
}

//tu código va aquí ^^^

//eof
