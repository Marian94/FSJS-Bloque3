/*
    Este ejercicio debe correr en Node.

    Crea cuatro objetos cualquiera, y agrégales algunas propiedades.
    Crea un quinto objeto vacío.
    Utilizando mixins, combina los 5 objetos en uno mismo, y guarda el objeto resultante en el quinto.
    Comprueba que sus propiedades y métodos son accesibles.
*/

//tu código va aquí vvv
/**
 * Creamos las propiedades de un animal cualquiera
 * -SONIDO
 * -DIETA
 * -HABITAT
 * -PESO
 * -LONGEVIDAD
 */
let sonidoAnimal = {
    setSonido(sonido) {
      this.sonido = sonido;
    },
    getSonido(){
      console.log(`Su sonido es ${this.sonido}`);
    }
}
let comidaAnimal = {
    setComida(dieta, comida) {
        this.dieta = dieta
      this.comida = comida;
    },
    getComida(){
      console.log(`Su dieta es ${this.dieta} y por lo regular come ${this.comida}`);
    }
}
let habitatAnimal = {
    setHabitat(habitat) {
      this.habitat = habitat;
    },
    getHabitat(){
      console.log(`Reside en  ${this.habitat}`);
    }
}
let pesoAnimal = {
    setPeso(peso) {
      this.peso = peso;
    },
    getPeso(){
      console.log(`Su peso aproximado es de ${this.peso} kg.`);
    }
}
let vidaAnimal = {
    setTiempoDeVida(tiempo) {
      this.tiempo = tiempo;
    },
    getTiempoDeVida(){
      console.log(`Pueden llegar a vivir hasta ${this.tiempo} años`);
    }
}
/**
 * Creamos la clase animal que guardara el nombre de un animal a crear
 */
class Animal {
    constructor(name) {
      this.name = name;
    }
}
/**
 * Creamos un animal, en este caso un elefante que heredara a la clase Animal
 */
let elefante = new Animal("Elefante");

console.log(elefante.name);
/**
 * Utilizando mixins (Object.assign), asignamos a nuestro elefante las propiedades creadas
 * anteriormente
 */
elefante = Object.assign(elefante, sonidoAnimal, comidaAnimal, pesoAnimal, habitatAnimal, vidaAnimal);
/**
 * Setearemos los atributos de cada propiedad
 */
elefante.setSonido("Barritar");
elefante.setComida("Herbívora", " hojas, frutos y cortezas");
elefante.setPeso(8000);
elefante.setTiempoDeVida("50-70");
elefante.setHabitat("Selva y sabana");
/**
 * Mostramos el objeto elefante con sus propiedades y atributos
 */
elefante.getSonido();
elefante.getComida();
elefante.getPeso();
elefante.getTiempoDeVida();
elefante.getHabitat();
//tu código va aquí ^^^

//eof
