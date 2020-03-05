/*
    Este ejercicio debe correr en Node.
    Cada instrucción de este ejercicio puede (y debe) realizarse con sólo una función.
    Todo lo que necesitas está en la documentación.

    -->A partir del mismo objeto que creaste en el ejercicio 1,
    -->Imprime todo el objeto con for-in.
    -->Elige una de sus propiedades y hazla no enumerable.
    -->Imprime de nuevo el objeto con for-in.
    -->Elige otra de sus propiedades y cambia su valor.
    -->Impide que el valor de esa propiedad sea cambiado.
    -->Trata de cambiar el valor de esa propiedad otra vez.
    -->Intenta agregar alguna nueva propiedad al objeto.
    -->Impide agregarle nuevas propiedades a todo el objeto.
    -->Intenta agregar alguna nueva propiedad al objeto.
    -->Borra alguna propiedad del objeto.
    -->Impide modificar el valor de todas las propiedades del objeto.
    Trata de realizar cualquier modificación al objeto.
*/

//tu código va aquí vvv
const persona  = 
{
    nombre: "Mariana",
    edad: 25,
    signo: "Geminis",
    escuela: "CUCEI",
    color: "Morado",
    materias: [],
    juegos: {titulo: "Zelda"}
};
//Imprimir codigo con bloque for in
for(propiedad in persona){
    console.log(`llave: ${propiedad}`);
    console.log(`valor: ${persona[propiedad]}`);
}
//Intenta agregar alguna nueva propiedad al objeto.
Object.assign(persona, {apellidoP: "Gonzalez", mascotas:"Perros y erizos"});
for(propiedad in persona){
    console.log(`llave: ${propiedad}`);
    console.log(`valor: ${persona[propiedad]}`);
}
//Elige una de sus propiedades y hazla no enumerable.
Object.defineProperty(persona, 'apellidoP', {
    enumerable : false 
});
for(propiedad in persona){
    console.log(`llave: ${propiedad}`);
    console.log(`valor: ${persona[propiedad]}`);
}
//Elige otra de sus propiedades y cambia su valor.
Object.defineProperty(persona, 'color', {
    value : "Azul" 
});
for(propiedad in persona){
    console.log(`llave: ${propiedad}`);
    console.log(`valor: ${persona[propiedad]}`);
}
//Impide agregarle nuevas propiedades a todo el objeto.
Object.defineProperty(persona, 'nombre', {
    writable: false
});
persona.nombre = "Marian";
for(propiedad in persona){
    console.log(`llave: ${propiedad}`);
    console.log(`valor: ${persona[propiedad]}`);
}
//Impide agregarle nuevas propiedades a todo el objeto.
Object.freeze(persona);
//Trata de realizar cualquier modificación al objeto.
// Nested objects are not frozen
persona.materias.push("Matematicas");
persona.juegos.titulo = "Pokemon";
console.log("---------------");
for(propiedad in persona){
    console.log(`llave: ${propiedad}`);
    console.log(`valor: ${persona[propiedad]}`);
}

//No se puede agregar nuevas propiedades
Object.assign(persona, {apellidoM: "Romero"});
persona.libros = "El principito";
//No se pueden modificar valores
persona.nombre = "Marian";
Object.defineProperty(persona, 'nombre', {
    writable: true
});

// Impide eliminar las propiedades del objeto.
delete personas.mascotas;


//tu código va aquí ^^^

//eof
