/*
    Repite el ejercicio 4, pero
    Esta vez usa una función constructora en vez de class.
*/

//tu código va aquí vvv
function cotizacionMeses(precio, meses, enganche){
    const IVA = precio*.15;
    const cotizacion = ((precio - enganche) / meses ) + IVA;
    const message = `Cotizacion a ${meses} meses, con un enganche de ${enganche} = ${Number(cotizacion.toFixed(2))}`
    return message;
}
function cotizacionSeguro(year, precio){
    let cotizacion = "";
    (year < 2020) ? cotizacion = (precio/12)*.16 :
    (year === 2020) ? cotizacion = (precio/12)*.20 :
    (year > 2020) ? cotizacion = (precio/12)*.25 : "0";
    const message = `Seguro del carro modelo ${year} = ${precio}`
    return message;
}
function lavadoInteriores(asientos, tipo){
    let cotizacion = "";
    let message = "";
    switch(tipo){
        case "sedan":
            cotizacion = asientos * 75;
        break;
        case "suv":
            cotizacion = asientos * 100;
        break;
        case "hatchback":
            cotizacion = asientos * 60;
        break;
        case "camioneta":
            cotizacion = asientos * 120;
        break;
        case "camion":
            cotizacion = asientos * 130;
        break;
        default:
            cotizacion = false;
        break;
    }
    if(cotizacion){
        message = `Lavado de carros para un vehiculo tipo ${tipo} de ${asientos} asientos = ${cotizacion}`;
    }else{
        message = "No se brindan servicios a ese tipo de vehiculo";
    }
    return message;
}
function Transporte (modelo, color, precio, tipo, puertas, AC, year, marca, meses, enganche, asientos) {
    this.modelo = modelo;
    this.tipo = tipo;
    this.color = color;
    this.precio = precio;
    this.year = year;
    this.puertas = puertas;
    this.marca = marca;
    this.AC = AC;
    this.meses = meses;
    this.enganche = enganche;
    this.asientos = asientos;
    this.cotizacionMeses = cotizacionMeses(this.precio, this.meses, this.enganche);
    this.cotizacionSeguro = cotizacionSeguro(this.year, this.precio);
    this.lavadoInteriores = lavadoInteriores(this.asientos, this.tipo);
}
//tu código va aquí ^^^
const carro = new Transporte("corolla","rojo", 345000, "sedan", "3", true, 2020, "Toyota", 24, 100000, 5);
console.log(`Objeto de nuestra clase:`);
console.log(carro);
console.log(`Propiedades de la clase: 
            Modelo: ${carro.modelo}
            Marca: ${carro.marca}
            Anio: ${carro.year}`);
console.log(carro.cotizacionMeses);
console.log(carro.cotizacionSeguro);
console.log(carro.lavadoInteriores);

//tu código va aquí ^^^

//eof
