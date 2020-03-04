/*
	Utilizando sólo objetos literales:
    Haz un objeto que contenga las partes de tu nombre completo (nombres y apellidos)
    Haz un objeto que contenga las partes de tu domicilio (calle, número, cp, colonia...)
    Haz un objeto que contenga los detalles de tu carrera (escuela, ciudad, carrera, fecha de egreso...)
    Haz un objeto que contenga los 3 objetos anteriores.
    Imprime el objeto.
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
console.log(datosPersonales);

//tu código va aquí ^^^

//eof
