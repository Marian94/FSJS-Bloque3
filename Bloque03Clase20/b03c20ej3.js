/*
    Este ejercicio debe correr en Node.

    Obtén el promedio de todos los números dentro del arreglo.
*/

const a = [623.549,685.324,528.423,492.587,120.065,983.004,300.470,421.799,101.265,323.650,147.265,200.684];
const tamanio = a.length;
let promedio = 0;
//tu código va aquí vvv
for(let i of a){
    promedio = i + promedio;
}
console.log(promedio/tamanio);
//tu código va aquí ^^^

//eof
