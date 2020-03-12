/*
    Este ejercicio debe correr en Node.

    Repite el ejercicio 1, pero esta vez utiliza composición en vez de extends.
*/

//tu código va aquí vvv
//Declaramos actividades que tiene una persona
const pasatiemposFavoritos = (state) => ({ //state es el objeto de la persona.
    //pasatiempoF es la funcion que tomara el pasatiempo que se le envia.
    pasatiempoF(p){
        console.log(`El pasatiempo de ${state.nombre} es ${p}`);
        //añadimos el pasatiempo dentro del objeto persona
        state.hobbies.push(p);
    }

});
const musicaFavorita = (state) => ({
    musicaF(m){
        console.log(`La musica favorita de ${state.nombre} a sus ${state.edad} años es ${m}`);
        state.musica.push(m);
    }
});
const libroFavorito = (state) => ({
    libroF(l){
        console.log(`EL libro favorito de ${state.nombre} ${state.apellido} es ${l}`);
        state.libros.push(l);
    }
});
//declaramos una funcion persona con las propiedades de la misma
function Persona (nombre, apellido, edad, sexo){
    //se crea un objeto persona
    let person = {
        nombre,
        apellido,
        edad,
        sexo,
        musica: [],
        libros: [],
        hobbies: []
    }
    //retornamos un objeto persona con sus diferentes propiedades y acciones.
    return Object.assign(
        person,
        pasatiemposFavoritos(person),
        musicaFavorita(person),
        libroFavorito(person)
      )    
}
const mariana  = new Persona("Mariana", "Romero", 25, "Femenino");
mariana.pasatiempoF("Cine");
mariana.pasatiempoF("Baile");
mariana.musicaF("clasica");
mariana.libroF("El principito");
mariana.libroF("El señor de los anillos");
console.log(mariana);

//tu código va aquí ^^^

//eof
