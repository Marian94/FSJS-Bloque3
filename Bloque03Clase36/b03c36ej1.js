/*
    Este ejercicio debe correr en Node.

    Usando closures, crea una función que reciba y contenga una profesión (string).
    Después, créale dentro otra función que reciba un nombre (string).

    Asegúrate de poder retornar un string que contenga ambos valores.
*/

//tu código va aquí vvv
//Creamos una funcion que recibe una profesion
function externa (profesion = ""){
    //validamos que lo ingresado sea valido (sea un string)
    if(typeof profesion === "string" && profesion !== ""){
        //respuesta sera el string que retornaremos si cumplen todas las condiciones
        let respuesta = profesion;
        //retornamos una funcion que recibira un nombre  y retorna la profesion y el nombre ingresado
        return function interna(nombre = ""){
            //concatenamos la respuesta y la imprimimos 
            respuesta += " "+ nombre;
            console.log(respuesta);
        }
    }//si no, se retorna un 0
    else{
        return 0;
    }
}
//Esta funcion validara que los datos ingresados en f sean los esperados
function validation (f){
    if(f  !== 0){
        //Si lo ingresado es correcto, le mandamos a f un nombre
        f("Juan");
    }else{
        //Si lo ingresado es incorrecto, mandamos un mensaje de error
        console.log("Ingresa una cadena de texto");
    }
}

let f = externa();
validation (f);
f = externa (123);
validation (f);
f = externa ("Chef");
validation (f);
//tu código va aquí ^^^

/*
const s = {
    "border" : "1px solid blue";
    "color": green;
};
function createDivNode (style){
    const divNode =document.createElement("div");
    for(let p in style){
        divNode.style.setProperty (p in style[p]);
    }
    const textNode = document.createTextNode("");
    divNode.appendChild(textNode);
    return function setContent(text){
        textNode.data = text;
        return divNode;
    }
}

const custom_div_creator = createDivNode(s);
const un_div = custom_div_creator("hola mundo");
const otro_div = custom_div_creator("gatito perturbado");
------------------------------------------------------------

function number (){
    let myNumber = 999;
    return {
        getNum: function (){
            console.log(myNumber);
            return myNumber;
        },
        setNum: function (newNumber){
            myNumber = newNumber;
        }
    }
}
let num = number();
num.getNum(); // 999
num.setNum(567); //change the number to 567
num.getNum(); //567
------------------------------------------------------------

IIFE's --> Expresion de funcion inmediatamente invocada 
(function(){
    console.log("hola mundo")
})();

const frase = function (nombre){
    console.log("Te llamas "+nombre);
}("Pedro");
------------------------------------------------------------

let valores = [
    {"esperado": 1, "obtenido": 0},
    {"esperado": 2, "obtenido": 0},
    {"esperado": 3, "obtenido": 0}
];
function pruebaLoop(miArreglo){
    let valorInicial = 1;
    for(let i = 0; i < miArreglo.length; i++){
        miArreglo[i]["obtenido"] = function (){
            return valorInicial + 1;
        }
    }
    return miArreglo;
}
let nuevosValores = pruebaLoop(valores);
let valor1 = nuevosValores[0]["obtenido"]();
let valor2 = nuevosValores[1]["obtenido"]();
let valor3 = nuevosValores[2]["obtenido"]();
console.log(valor1);
console.log(valor2);
console.log(valor3);
 */
//eof
