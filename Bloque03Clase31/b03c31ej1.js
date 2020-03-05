/*
    Este ejercicio debe correr en Chrome.

    Para este ejercicio debes volver a otro ejercicio que ya has realizado:
    Bloque 02 - Clase 05 - Ejercicio 05.

    Realiza el mismo ejercicio, pero sólo agregando elementos usando el DOM con JS.
    Necesitarás crear un archivo HTML que tenga sólo los tags doctype y <html>.
*/

//tu código va aquí vvv
//Lista de super heroes
const avengers = [
    {
        "nombre": "Superhéroe",
        "identidad": "Identidad",
        "superpoder": "Poder",
        "primerapeli": "Película"
    },{
        "nombre": "Iron Man",
        "identidad": "Tony Stark",
        "superpoder": "Super Traje",
        "primerapeli": "Iron Man 1"
    },{
        "nombre": "Captain America",
        "identidad": "Steve Rogers",
        "superpoder": "Escudo",
        "primerapeli": "Captain America 1"
    },{
        "nombre": "Hulk",
        "identidad": "Bruce Banner",
        "superpoder": "Super Fuerza",
        "primerapeli": "Hulk"
    },{
        "nombre": "Thor",
        "identidad": "Thor",
        "superpoder": "Martillo",
        "primerapeli": "Thor 1"
    },{
        "nombre": "Black Widow",
        "identidad": "Natasha Romanoff",
        "superpoder": "Combate",
        "primerapeli": "Iron Man 2"
    }
];
//creamos una tabla a traves de manipular el DOM
const mitabla = document.createElement("table");
//añadimos el estilo
mitabla.style.setProperty("border", "5px solid red");

//declaramos las filas
const tableRows = [];

let row, col, txt;
//creamos la celda de cada super heroe
for(let i=0; i<avengers.length; i++) {
    //declaramos cada fila
    row = document.createElement("tr");
    //declaramos su estilo
    row.style.setProperty("border", "5px solid blue");
    //la añadimos a la tabla
    tableRows.push(row);
    //recorremos los atributos de cada super heroe
    for(let prop in avengers[i]) {

        if(i===0) {
            //creamos la cabecera (titulo)solo una vez
            col = document.createElement("th");
        }else {
            //creamos las celdas
            col = document.createElement("td");
        }
        //añadimos el estilo de las celdas
        col.style.setProperty("border", "5px solid green");
        //dentro de las celdas añadiremos el contenido del objeto (texto)
        txt = document.createTextNode(avengers[i][prop]);
        col.appendChild(txt);
        //añadimos las celdas a las columnas
        tableRows[i].appendChild(col);
    }
    //terminamos la tabla
    mitabla.appendChild(tableRows[i]);
}
//añadimos la tabla dentro del objeto div que tiene un id "body"
const el_body = document.getElementById("body");
el_body.appendChild(mitabla);


//tu código va aquí ^^^

//eof
