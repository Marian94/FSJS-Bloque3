/*
    Este ejercicio debe correr en Node.

    Crea un objeto cualquiera, y agrégale algunas propiedades.
    Asegúrate de que tenga algún método que haga uso de this.
    Después, herédalo al menos una vez.
    En el objeto hijo, crea una función con el mismo nombre que alguna función en el padre,
    pero que tenga diferente contenido.

    Comprueba que al llamar a esta función desde el hijo con y sin super, ambos comportamientos son accesibles.
*/

//tu código va aquí vvv
class Persona {
    constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    }
    imprimeNombre(){
        console.log(`Hola, me llamo ${this.nombre} soy de la clase Persona`);
    }
}
class Hobbies extends Persona {
    constructor(hobbie){
        super();
        this.hobbie = hobbie;
    }
    printObject(){
        console.log(`Tengo ${this.edad} años y esta propiedad es heredada de la clase Persona, y me gusta ${this.hobbie}, este hobbie viene directo de la clase Hobbies`)
    }
    /*imprimeNombre(){
        console.log(`Tengo ${this.edad} años y esta propiedad es heredada de la clase Persona, y me gusta ${this.hobbie}, este hobbie viene directo de la clase Hobbies`)
    }*/
}

const obj = new Hobbies("Felting");
obj.nombre = "Mariana";
obj.edad = 25;
//toma la funcion de la clase Hobbie y no la de la clase Persona
obj.imprimeNombre();
obj.imprimeNombre();
console.log("------------------");
const obj2 = new Hobbies("Cocina");
obj2.nombre = "German";
obj2.edad = 23;
obj2.imprimeNombre();
obj2.printObject();


//tu código va aquí ^^^

//eof
