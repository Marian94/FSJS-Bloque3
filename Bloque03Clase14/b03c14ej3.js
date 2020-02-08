/*
    Este ejercicio debe correr en Node.

    Crea y asigna las variables nombre, comida y juego donde sea necesario.
    Usa const o let según sea necesario.
    Verifica si el enunciado completo se imprime en pantalla correctamente.
*/
/**
 * La unica variable que no cambia es el nombre, por ende esa variable sera de tipo const
 * Las variables comida y juego cambiaran, por ende son de tipo let
 */
const nombre = "Mariana";
let comida = "Panini";
let juego = "Zelda BoW";
console.log("Me llamo: "+nombre);
console.log("Hoy comí: "+comida);
comida = "Aguachile";
console.log("Mañana comeré: "+comida);
console.log("Ahorita ando jugando: "+juego);
juego = "Salem o Catan";
console.log("Cuando lo acabe, jugaré: "+juego);

//eof
