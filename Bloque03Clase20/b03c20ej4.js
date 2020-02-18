/*
    Este ejercicio debe correr en Node.

    Este ejercicio contiene varios retos, para cada uno deberás usar la función adecuada.
*/

//tu código va aquí vvv

//concatena el contenido de este arreglo en un string para crear la letra de una canción
const rola = ["we","will","we","will","rock","you"];
let cancion = "";
for(i of rola){
    cancion += `${i} `;
}
console.log(cancion);
console.log("-------------------------");
//inicializa el siguiente arreglo con valores null
const basura = [3456, 5674567, 564784567, 97695, 3456345, 685468, 452356];
for(let i = 0; i < basura.length; i++){
     basura[i] = null;
}
console.log(basura);
console.log("-------------------------");

//Obtén sólo el alias de esta persona
const nombre = "Roberto 'Chespirito' Gómez";
let apodo = nombre.split("'")[1]
console.log(apodo)
console.log("-------------------------");

//El siguiente arreglo debe contener sólo los números del 1 al 10 en orden.
//Agrega y borra lo que haga falta.
const serie = [-5, -2, 3, 5, 8, 15, 26];
for(let i = 0; i < 10; i++){
    serie[i] = i+1;
}
console.log(serie);
console.log("-------------------------");

//El siguiente arreglo debe contener sólo las partes de un coche.
//Agrega y borra lo que haga falta, usando sólo una función, una vez.
const coche = ["llantas", "rines", "alas", "velas", "caldera", "parabrisas", "motor", "escape"];
const newCoche = [];
for(i of coche){
    if(!i.includes("alas") && !i.includes("velas") && !i.includes("caldera")){
        console.log(i);
    }
}
console.log("-------------------------");

//Devuelve sólo aquellos elementos de este arreglo que contengan la letra A (mayúscula o minúscula)
const palabras = ["Gokú", "Vegeta", "Pikoro", "Bulma", "Gohan", "Yamcha", "Shen Long", "Freezer", "Ten Shin Han", "Androide 18"];
for(i of palabras){
    if(i.indexOf("a")>-1){
        console.log(i);
    }
}
console.log("-------------------------");
//tu código va aquí ^^^

//eof
