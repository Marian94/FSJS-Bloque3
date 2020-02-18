/*
    Este ejercicio debe correr en Node.

    Realiza un sondeo entre tus compañeros.
    Cada uno deberá decir 3 películas que le gusten.
    No importa si se repiten.
    Crea un Set que las incluya todas.

    Después, usando la función has()
    escribe código para verificar
    si alguna película está entre las favoritas del salón.
*/

//tu código va aquí vvv
const Peliculas = new Set();

Peliculas.add("Mary and Max");
Peliculas.add("Porco Rosso");
Peliculas.add("Lord of the rings");
Peliculas.add("Camino a la felicidad");
Peliculas.add("Cumbres borrascosas");
Peliculas.add("Invictus");
Peliculas.add("Cinema Paradiso");
Peliculas.add("Big Fish");
Peliculas.add("Good Father");
Peliculas.add("Shrek");
Peliculas.add("Shrek 2");
Peliculas.add("Shrek 3");
Peliculas.add("Joker");
Peliculas.add("Parasite");
Peliculas.add("Ad Astra");

console.log(Peliculas.has("Porco Rosso"));
//tu código va aquí ^^^

//eof

