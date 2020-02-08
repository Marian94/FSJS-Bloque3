/*
    Este ejercicio debe correr en Node.

    Usando variables de diferentes tipos,
    Para cada compañero(a) de la clase,
    Guarda su nombre, su edad y si usa Windows o no.

    Después, imprime esos datos en pantalla.
*/

//tu código va aquí vvv
/**
 * OPCION 1
 * Declararemos 3 variables diferentes por cada alumno.
 * Una sera de tipo constante (Nombre), las otras 2 seran de tipo let (edad y SO).
 */
const nombreA = "Mariana";
let ageA = "25";
let WindowsA = true;
const nombreB = "Gerardo";
let ageB = "40(?)";
let WindowsB = false;
const nombreC = "Jorge"; 
let ageC = "31(?)";
let WindowsC = true;

console.log(`Nombre: ${nombreA}\nEdad: ${ageA}\nWindows: ${WindowsA}\n________________`);
console.log(`Nombre: ${nombreB}\nEdad: ${ageB}\nWindows: ${WindowsB}\n________________`);
console.log(`Nombre: ${nombreC}\nEdad: ${ageC}\nWindows: ${WindowsC}\n________________`);

 /**
  * OPCION 2
  * Se puede hacer un arreglo de objetos, el cual solo almacenara objetos de personas
  */
 //Declaramos un arreglo vacio.
let Alumnos = [];
//Agregamos objetos de alumnos
Alumnos.push({
    nombre:"Mariana",
    edad: "25",
    windows: true
});
Alumnos.push({
    nombre:"Jorge",
    edad: "31(?)",
    windows: false
});
Alumnos.push({
    nombre:"Gerardo",
    edad: "40(?)",
    windows: false
});
//Desplegamos mensaje
console.log(Alumnos);


//tu código va aquí ^^^

//eof
