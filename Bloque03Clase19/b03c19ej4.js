/*
    Este ejercicio debe correr en Chrome.

    Simular una calculadora en la terminal.
    Debe hacer suma, resta, multiplicación, división y módulo.
    Debe operar sólo con dos números.
    Prohibido utilizar if, switch o expresiones ternarias.
    Colocar los números y la operación en las variables
    Imprimir en pantalla el resultado.
*/

//tu código va aquí vvv

function messageClick(){
    const op1 = document.getElementById("term1").value;
    const op2 = document.getElementById("term2").value;
    const signo = document.getElementById("sign").value;
    const str = op1 + signo + op2;
    const checkNumber = /^-?\d+(?:\.\d+)?$/;

    //Se verifica que los datos ingresados sean numeros
    if(checkNumber.test(op1) && checkNumber.test(op2)){
        alert(`${op1} ${signo} ${op2} = ${eval(str)}`);   
    }else{
        alert("Porfavor ingrese un numero")
    }
    
}

//tu código va aquí ^^^

//eof
