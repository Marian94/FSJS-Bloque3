/*
    Este ejercicio debe correr en Node.

    Crea dos clases con class.
    La segunda debe heredar a la primera con extends.
    Crea un objeto a partir de la segunda clase.
    Comprueba que las propiedades y métodos de ambas son accesibles desde el objeto.
*/

//tu código va aquí vvv
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

class Mujer extends Persona {
    constructor() {
        super();
        this.sexo = "Femenino";
    }
}
const m = new Mujer();
m.nombre ="Mariana"
m.apellido="Gonzalez";
m.edad = 25;
console.log(m);
//tu código va aquí ^^^

//eof
