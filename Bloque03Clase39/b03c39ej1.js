/*
    Este ejercicio debe correr en Node.

    Realiza el mismo ejercicio de la clase 38, pero con Promesas.
*/

const fs = require('fs');
//Delcaramos una variable que manejara las promesas
const fsPromises = fs.promises;

//tu código va aquí vvv

const mi_archivo = "mi_archivo.txt";
//con la variable, usamos la funcion readFile de fs , le pasamos de parametro el nombre del archivo y lo codifica con utf8 (estandar para caracteres)
//Despues, si la promesa se cumple (.then(data)), mandara el texto escrito en el archivo (data), si no se llega a cumplir
//manda el catch() con un mensaje de error.
fsPromises.readFile(mi_archivo, 'utf-8').then( data => {
    console.log(data);
}).catch( () => 
    console.log('No se puede abrir el archivo')
);

//tu código va aquí ^^^

//eof
