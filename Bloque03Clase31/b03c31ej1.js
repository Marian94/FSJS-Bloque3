/*
    Este ejercicio debe correr en Chrome.

    Para este ejercicio debes volver a otro ejercicio que ya has realizado:
    Bloque 02 - Clase 05 - Ejercicio 05.

    Realiza el mismo ejercicio, pero sólo agregando elementos usando el DOM con JS.
    Necesitarás crear un archivo HTML que tenga sólo los tags doctype y <html>.
*/

//tu código va aquí vvv
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

const mitabla = document.createElement("table");
mitabla.style.setProperty("border", "5px solid red");

const tableRows = [];

let row, col, txt;

for(let i=0; i<avengers.length; i++) {

    row = document.createElement("tr");
    row.style.setProperty("border", "5px solid red");
    tableRows.push(row);

    for(let prop in avengers[i]) {

        if(i===0) {
            col = document.createElement("th");
        }else {
            col = document.createElement("td");
        }

        col.style.setProperty("border", "5px solid red");
        txt = document.createTextNode(avengers[i][prop]);
        col.appendChild(txt);
        tableRows[i].appendChild(col);
    }

    mitabla.appendChild(tableRows[i]);
}

const el_body = document.getElementById("body");
el_body.appendChild(mitabla);


//tu código va aquí ^^^

//eof
