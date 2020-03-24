/*
    Este ejercicio debe correr en Node.

    Crea alguna función que reciba 5 parámetros.
    Crea varios arreglos de 5 elementos.
    Usando operadores spread, envía cada arreglo a la función y verifica que hace lo que debe.

    Usando rest parameter, crea alguna función que pueda operar con cualquier cantidad de parámetros.
    Llámala varias veces, con distintas cantidades de parámetros y comprueba que funcione.
*/

//tu código va aquí vvv
function mostrar(edad, nombre, mascota, hobbie, trabajo){
    console.log(`
    HOLA ${nombre}, tienes ${edad} años, tienes ${mascota} de mascota.
    Tu hobbie es ${hobbie} y trbajas como ${trabajo}
    Edad hace 3 años ${edad-3}`);
}
const arr1  = [, "Armando", "tortuga", "bailar", "mercante"];
const arr2  = [25, "Mariana", "erizo", "", "developer"];
const arr3  = [27, "Toño", "perro", "dibujar"];

mostrar(...arr1);
mostrar(...arr2);
mostrar(...arr3);
//tu código va aquí ^^^

//eof
