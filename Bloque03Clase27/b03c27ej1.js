/*
    Este ejercicio debe correr en Node.

    Crea cualquier objeto genérico, agrégale algunas propiedades.
    Herédalo una vez. Al objeto heredado agrégale otras propiedades. Trabajaremos con este objeto básico.
    Recorre su cadena de prototipos usando getPrototypeOf() y a cada prototipo agrégale una propiedad.
    Finalmente, llama todas las propiedades desde el objeto básico y comprueba que sean accesibles.
    Imprime toda su cadena de prototipos usando la función printProtoChain que está en las diapositivas.
*/

//tu código va aquí vvv
class Pajaro {
    constructor() {
        this.propDePajaro = "Soy pájaro";
    }
}

class Pollo extends Pajaro {
    constructor() {
        super();
        this.propDePollo = "Soy pollo";
    }
}

const po = new Pollo();
po.__proto__.propDeProtoPollo = "Soy proto de Pollo";
po.__proto__.__proto__.propDeProtoPajaro = "Soy proto de Pajaro";
po.__proto__.__proto__.__proto__.propDeProtoObjeto ="Soy proto de Object";

function printProtoChain(obj, ind="") {
    ind2 = ind+"    ";
    if(obj==null) {
        console.log("\n"+ind+"null");
        return;
    }
    console.log("\n"+ind+obj.constructor.name+" : {\n");
    for(let p in obj) {
        console.log(`${ind2}"${p}" : "${obj[p]}",`);
    }
    printProtoChain(Object.getPrototypeOf(obj), ind2);
    console.log(ind+"}"); //cerrar bloque de objeto
}

printProtoChain(po);
//tu código va aquí ^^^

//eof
