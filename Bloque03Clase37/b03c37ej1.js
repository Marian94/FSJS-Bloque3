/*
    Este ejercicio debe correr en Node.

    Crea 3 objetos con las mismas 3 propiedades, pero con 2 métodos diferentes cada uno.
    Ejecuta los métodos de cada objeto en los demás objetos usando bind(), call() y apply().
*/

//tu código va aquí vvv
const obj1 = {
    "nombre": "Mariana",
    "edad": 25,
    "postre":"arroz con leche",
    "mostrarArreglo": function (){
        return [this.nombre, this.edad, this.postre];
    },

    
};
console.log("OBJETO 1 MODIFICADO CON BIND");
console.log(obj1.mostrarArreglo());
const obj1_copia = obj1.mostrarArreglo.bind({"nombre":"MARIANA NUEVO THIS CON BIND", "edad":26, "postre":"FLAN NUEVO POSTRE"});
console.log(obj1_copia());
console.log("-----------------------------");
const obj2 = {
    "nombre": "German",
    "edad": "18",
    "postre":"pan de elote",
    "saludo": function (str1, str2){
        console.log(`${str1} ${this.nombre}, tengo ${this.edad} años y ${str2} ${this.postre}`);
        
    }
};
console.log("OBJETO 2 MODIFICADO CON CALL");
obj2.saludo("Hola, me llamo", "me gusta el");
const obj2_copia = obj2.saludo.call({"nombre":"Joaquin", "edad":27, "postre":"alfajor" }, "Mucho gusto, yo soy", "me entantan el");
console.log("-----------------------------");
const obj3 = {
    "nombre": "Joaquin",
    "edad": "27",
    "postre":"alfajores",
    "mostrar": function (str1,str2){
        console.log(`${str1} ${this.nombre} tengo ${this.edad} años y me gustan los ${this.postre}, ${str2}`)
    }
}
console.log("OBJETO 3 MODIFICADO CON APPLY");
obj3.mostrar("Hola, soy el objeto antes de modificar", "Adios :)");
const obj3_copia = obj3.mostrar.apply({"nombre":"Mariana", "edad":26, "postre": "arroz con leche"},["Soy el nuevo objeto modificado con Apply", "Mucho Gusto!"]);
console.log("-----------------------------");

//tu código va aquí ^^^

//eof
/*
-----------------------------------------
THAT EN OBJETOS Y CLASES

 const algunObjeto = {
     "externa": function (){
         //this aqui es algunObjeto
         const that = this; //es buena practica llamar a la copia de this con "that"
         return function closure(){
             //that contiene this de algunObjeto y se maneja sus propiedades
             //this aqui es global
         }
     }
 }
 class Clase {
     //constructor
     externa(){
        const that = this; //es buena practica llamar a la copia de this con "that"
        //this es el objeto que salio del contructor
        return function closure(){
            //that contiene this del objeto que salio del constructor  y se puede sus propiedades
            //this es undefined
        }
     }
 }
------------------------------------------
BIND --> PROPIEDAD DE LAS FUNCIONES, REGRESA UNA NUEVA FUNCION
const obj ={
    "name" : "Mariana",
    "ejemplo" : function(){
        console.log(this.name)
    }
}
obj.ejemplo(); //imprime Mariana
const otroNombre = obj.ejemplo.bind({"name":"German"});
otroNombre(); //imprime German   AQUI REGRESA LA NUEVA FUNCION
-----------------------------------------
CALL --> A DIFERENCIA DE BIND ES QUE ESTE NO REGRESA UNA NUEVA FUNCION, SE EJECUTA INMEDIATAMENTE
const obj ={
    "name" : "Mariana",
    "ejemplo" : function(){
        console.log(this.name)
    }
}
obj.ejemplo(); //imprime Mariana
const otroNombre = obj.ejemplo.call({"name":"German"}); //imprime German  SE EJECUTA DIRECTAMENTE

const obj2 ={
    "name" : "Mariana",
    "saludarODespedir" : function(str1, str2){
        console.log(`${str1} ${this.name} ${str2}`);
    }
}
obj2.saludarODespedir("Hola soy", "Mucho gusto!"); //imprime "Hola soy Mariana Mucho gusto!"
const otroSaludo = obj.saludarODespedir.call({"name":"German"}, "Yo soy", "Hasta luego"); //imprime "Yo soy German Adios"  SE EJECUTA DIRECTAMENTE Y LOS ARGUMENTOS SE PASAN COMO NUEVOS PARAMETROS

-----------------------------------------
APPLY --> SE EJECUTA INMEDIATAMENTE Y SUS ARGUMENTOS VAN EN EL SEGUNDO PARAMETRO DENTRO DE ARREGLOS
const obj ={
    "name" : "Mariana",
    "saludarODespedir" : function(str1, str2){
        console.log(`${str1} ${this.name} ${str2}`);
    }
}
obj.ejemplo("Hola soy", "Mucho gusto!"); //imprime "Hola soy Mariana Mucho gusto!"
const otroNombre = obj.ejemplo.call({"name":"German"}, ["Yo soy", "Hasta luego"]); //imprime "Yo soy German Adios"  SE EJECUTA DIRECTAMENTE Y LOS ARGUMENTOS SE PASAN DENTRO DE UN ARREGLO


*/

