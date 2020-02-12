/*
    Este ejercicio debe correr en Chrome.

    Realiza todas las comparaciones posibles entre los 2 valores que recibes.
    Después coloca el resultado de cada comparación en el div "resultados"
*/

let term1 = document.getElementById("term1").value;
let term2 = document.getElementById("term2").value;

let resultados = "";
let divresultados = document.getElementById("divresultados");

function messageClick() {
    try{
        //usa term1.value y term2.value para obtener lo que escribes en los input.
        //el string resultados debe describir todas las comparaciones que realices.

        //tu código va aquí vvv
        resultados = `[${term1} <= ${term2}] = ${term1<=term2} dependiendo del string ingresado, los elementos ingresados son de tipo string.\n
                    [${term1} <= ${term2}] = ${parseInt(term1)<=parseInt(term2)} dependiendo el numero ingresado, los elementos ingresados son numeros ya que se convirtieron usando parseInt\n
                    [Boolean(${term1})] = ${Boolean(term1)} ya que es una cadena string\n
                    [Boolean(${term2})] = ${Boolean(parseInt(term2))} ya que es un numero, se convirtio con parseInt` ;

        //tu código va aquí ^^^

        divresultados.innerHTML = resultados;
    } catch(e){
        console.log(e);
    }
}

//eof
