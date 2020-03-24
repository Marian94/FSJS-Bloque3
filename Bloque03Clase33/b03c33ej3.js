/*
    Este ejercicio debe correr en Node.

    Crea un objeto cualquiera, y agrégale algunas propiedades.
    Agrégale una arrow function guardada en una de sus propiedades.
    Esa arrow function debe imprimir otra de las propiedades del objeto.

    Crea la misma arrow function fuera del objeto, pero que reciba un objeto como argumento.

    Llama ambas funciones y comprueba lo que sucede.
    ¿Puedes explicar el fenómeno en términos de this?
*/

//tu código va aquí vvv

const obj = {
    "nombre"    : "Coronavirus",
    "caracter"  : "virulento",
    "edad"      : "1",
    "victimas"  : "miles",
    "sintomas"  : "una gripe perrona",
    "proteccion": "lavarte las manos",
    "funcion"   : () => {
        console.log("print #2: ", this.nombre);
    }
    //this en funcion aun no esta definida, hasta que se termine de crear el objeto
};
//creado el objeto, podemos acceder a sus propiedades
console.log("print #1: ", obj.nombre);
//El this de un arrrow function es el scope de donde fue definida
//en este caso existe en su declaracion, no en su invocacion
const funcion = (obj) => {
    //obj es una variable global, no definida dentro del scope de una arrowfunction por ello dara undefined
    console.log("print #3: ", obj.nombre);
};

obj.funcion();
funcion({});

//tu código va aquí ^^^

//eof
