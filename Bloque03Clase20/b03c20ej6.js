/*
    Este ejercicio debe correr en Node.

    Crea un map que incluya un elemento por cada compañero(a) de clase.
    Su primer nombre será la llave.
    El valor de esa llave debe contener otro map, que tendrá:
    	edad,
    	profesión,
    	tacos favoritos
*/

//tu código va aquí vvv
const Alumnos = new Map;
const DatosM = new Map;
const DatosG = new Map;
const DatosJ = new Map;
Alumnos.set("Mariana",DatosM.set("edad",25),DatosM.set("profesion", "developer"), DatosM.set("tacos favoritos", "Peinecillo"));
Alumnos.set("Gaby", DatosG.set("edad",31), DatosG.set("profesion", "maestra"), DatosG.set("tacos favoritos", "Arrachera"));
Alumnos.set("Jorge", DatosJ.set("edad",40), DatosJ.set("profesion", "TO"), DatosJ.set("tacos favoritos", "Rib Eye"));

console.log(Alumnos);
//tu código va aquí ^^^

//eof

