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
    comer(){
        console.log("Hola, una persona come")
    }
}

class Mujer extends Persona {
    constructor(nombre, apellido, edad, sexo) {
        super(nombre, apellido, edad);
        this.sexo = sexo;
    }
    parir(){
        console.log("Una mujer puede parir")
    }
}
const m = new Mujer("Mariana", "Gonzalez", 25, "Femenino");
console.log(m);
m.parir();
m.comer();
//tu código va aquí ^^^

//eof
