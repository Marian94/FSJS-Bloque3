/*
    Este ejercicio debe correr en Node.

    Escribe parámetros con valores default apropiados para completar el saludo que está dentro de la función.
*/

//tu código va aquí vvv

function saludar(nombre = "Mariana", edad = "25", ciudad = "Zapopan", oficio = "desarrollador de software", juego = "Zelda") {
    console.log(`¡Hola! Soy ${nombre}, tengo ${edad} años, nací en ${ciudad}, me dedico a ${oficio} y mi juego favorito es ${juego}.`);
}

saludar();
//tu código va aquí ^^^

//eof
