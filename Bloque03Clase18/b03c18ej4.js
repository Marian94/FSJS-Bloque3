/*
    Este ejercicio debe correr en Node.

    Con un bloque switch-case, imprime "tu dato D es del tipo T" para cualquier tipo de dato.
    Tendrás que evaluar los posibles valores que arroja el operador typeof.
*/
/**
 * const dato = {};
 * const dato = [];
 * const dato = "100";
 * const dato = Symbol();
 * const dato = 100;
 * const dato = undefined;
 * const dato = null;
 * const dato = true;
 */
const dato = 100;
const tipo = typeof(dato);

console.log(tipo);
//tu código va aquí vvv
switch (tipo){
    case "number":
        console.log("El dato ${dato} es de tipo numero");
    break;
    case "string":
        console.log("El dato ${dato} es de tipo string");
    break;
    case "boolean":
        console.log("El dato ${dato} es de tipo booleano");
    break;
    case "undefined":
        console.log("El dato ${dato} es de tipo undefined")
    break;
    case "symbol":
        console.log("El dato ${dato} es de tipo symbol")
    break;
    default:
        console.log("El dato ${dato} es de tipo object");
    break;
}

//tu código va aquí ^^^

//eof
