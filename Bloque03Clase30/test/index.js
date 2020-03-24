const assert = require("chai").assert;
const main  = require("../b03c30ej1.js");

describe ("Ejercicio 30 test", () =>{
    it("No son strings", () => {
        const result = main.sumaPositiva();
        assert.notTypeOf('k','1','String no es un numero');
       
    });    

});