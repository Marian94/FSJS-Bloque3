/*
    Convierte el arreglo del ejercicio 1 a JSON.
    Copia y pega el JSON generado en Slack
    Toma alguno de los JSON de tus compañeros y conviértelo a objeto.
    Imprime el objeto que recibiste.
*/

//tu código va aquí vvv
const nombreCompleto = {
    nombre : "Mariana",
    apellidoPaterno: "Gonzalez",
    apellidoMaterno: "Romero" 

};
const domicilio = {
    calle: "Juliana",
    numero: "5644-A",
    cp: "45234",
    colonia: "Juliano"

};
const carrera = {
    escuela : "CUCEI",
    ciudad: "Tlaquepaque",
    carrera: "Ing. en computacion",
    egreso : "2018-A"
};
const datosPersonales = {
    nombrePersona: nombreCompleto,
    domicilioPersona: domicilio,
    carreraPersona: carrera
}
const datosPersonalesJSON = JSON.stringify(datosPersonales);
console.log(datosPersonalesJSON);
//tu código va aquí ^^^

//eof
