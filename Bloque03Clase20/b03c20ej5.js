/*
    Este ejercicio debe correr en Node.

    Imprime todos los elementos del arreglo a en orden.
    Pero cada 10 valores impresos, imprime también "ya imprimí otros 10".
    Está prohibido usar ciclos en este ejercicio.
*/

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

//tu código va aquí vvv
//La funcion map() itera sobre cada elemento del arreglo y se puede crear una funcion que modifica a cada elemento del arreglo.
numeros.map( x => {
    //la variable x es cada elemento del arreglo y verificamos si el elemento x es multiplo de 10 entonces imprimimos el mensaje
    console.log(x);
    if(x % 10 === 0){
        console.log("ya imprimi otros 10")
    }
})

//tu código va aquí ^^^

//eof
