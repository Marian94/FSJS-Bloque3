/*
    Este ejercicio debe correr en Node.

    Revisa la clase 27 y copia aquí la función printProtoChain().
    Adapta esta función para que imprima las propiedades con llave de tipo Symbol.

    Crea un objeto que tenga llaves string y Symbol.
    Pon a prueba la función printProtoChain modificada con ese objeto.
*/

//tu código va aquí vvv



class Libro {
    constructor(paginas){
        this.paginas = paginas;
    }
}

class LibroTecnico extends Libro {
    constructor(paginas){
        super (paginas);
        this.genero = "Ciencia";
    }
}

const librito = new Libro("520");
Object.getPrototypeOf(librito).name = "JS";

function printProtoChain(obj, ind="") {

    ind2 = ind+" ";

    if(obj==null) {
        console.log("\n"+ind+"null");
        return;
    }

    console.log("\n"+ind+obj.constructor.name+" : {\n");
    var objectSymbols = Object.getOwnPropertySymbols(obj);

    //For of porque es un arreglo
    for(let p of objectSymbols) {
        console.log(p);
    }

    printProtoChain(Object.getPrototypeOf(obj), ind2);
    console.log(ind+"}"); //cerrar bloque de objeto
}

const PAGINAS = Symbol("520");
librito[PAGINAS] = 230;
printProtoChain(librito);
//tu código va aquí ^^^

//eof
