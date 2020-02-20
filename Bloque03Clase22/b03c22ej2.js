/*
    Este ejercicio debe correr en Node.

    Realiza dos copias del arreglo a.
    Una de ellas debe cambiar su contenido a la vez que el de a.
    La otra debe ser independiente de a.
*/


let a = ["aserejé", "ja", "dejé", "dejébetu", "dejébede", "sebinoua", "majabi", "andebugui", "andebuididipi"];
//B se pasara por la funcion por referencia ya que es un arreglo
let b = a;
//C sera una copia convertida por string ya que asi, no se pase el valor por referencia
let c = a.toString();

function changeElement(arreglo){
    for(let i = 0; i < arreglo.length; i++ ){
        arreglo[i] += "-"
    }
}
changeElement(b);
console.log(`\nARREGLO A: ${a}\n`);
console.log(`ARREGLO B: ${b}\n`);
console.log(`ARREGLO C: ${c}\n`);

//tu código va aquí vvv
/*const arr = ["hola", "mundo", "que", "tal"];
function arregloUno (lista){
    for(let i = 0; i < lista.length; i++){
        lista[i]+="1";
    }
    lista.push("1");
}
console.log(arr);
console.log(arregloUno(arr));
console.log(arr);
*/
//tu código va aquí ^^^

//eof
