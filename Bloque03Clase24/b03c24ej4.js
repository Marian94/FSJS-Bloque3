/*
    Crea una clase que represente algún medio de transporte.
    Utiliza la sintáxis de class y constructor.
    Debe tener al menos 5 propiedades y 3 métodos.

	Después, crea un objeto de esa clase y comprueba que sus propiedades son accesibles
	También comprueba que sus métodos funcionan.
*/

//tu código va aquí vvv
class Transporte {
    constructor(modelo, color, precio, tipo, puertas, AC, year, marca){
        this.modelo = modelo;
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.year = year;
        this.puertas = puertas;
        this.marca = marca;
        this.AC = AC
    };
    cotizacionMeses(precio, meses, enganche) {
        const IVA = precio*.15;
        const cotizacion = ((precio - enganche) / meses ) + IVA;
        const message = `Cotizacion a ${meses} meses, con un enganche de ${enganche} = ${Number(cotizacion.toFixed(2))}`
        return message; 
    };
    cotizacionSeguro(year, precio){
        let cotizacion = "";
        (year < 2020) ? cotizacion = (precio/12)*.16 :
        (year === 2020) ? cotizacion = (precio/12)*.20 :
        (year > 2020) ? cotizacion = (precio/12)*.25 : "0";
        const message = `Seguro del carro modelo ${year} = ${precio}`
        return message;
    };
    lavadoInteriores(asientos, tipo){
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
    };
}
//tu código va aquí ^^^
const carro = new Transporte("corolla","rojo", 345000, "sedan", "3", true, 2020, "Toyota");
console.log(`Objeto de nuestra clase:`);
console.log(carro);
console.log(`Propiedades de la clase: 
            Modelo: ${carro.modelo}
            Marca: ${carro.marca}
            Anio: ${carro.year}`);
console.log(carro.cotizacionMeses(345000, 24, 100000));
console.log(carro.cotizacionSeguro(2021, 345000));
console.log(carro.lavadoInteriores(5, "jj3j3j3"));
console.log(carro.lavadoInteriores(5, "suv"));

//eof
