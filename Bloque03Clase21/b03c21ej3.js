/*
    Este ejercicio debe correr en Node.

    Realiza una función que reciba un string y un boolean.
    Si el boolean es true, la función debe devolver cuántas vocales hay en el string.
    Si el boolean es false, debe devolver cuántas consonantes hay.

	Al declarar la función, guárdala en una variable.
*/

//tu código va aquí vvv
function consonante(palabra, vocal){
    const vocales = /[aeiouAEIOU]/gi;
    let letras = ``;
    let suma = 0;
    if(vocal){
        letras += `vocales (`
        for(let i = 0; i<= palabra.length-1; i++){
            if(vocales.test(palabra.charAt(i))){
                suma++;
                letras += palabra.charAt(i);
            }
        }
    }else{
        letras += `consonantes (`
        for(let i = 0; i<= palabra.length-1; i++){
            if(!vocales.test(palabra.charAt(i))){
                suma++;
                letras += palabra.charAt(i) ;
            }
        }
    }
    
    return `La palabra "${palabra}" tiene ${suma} ${letras}) `;
}
const a  = consonante("MARIANA GONZALEZ ROMERO************", false);
console.log(a);
//tu código va aquí ^^^

//eof
