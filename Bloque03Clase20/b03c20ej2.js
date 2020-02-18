/*
    Este ejercicio debe correr en Node.

    imprime las letras contenidas en el arreglo a, una sí y una no.
    ¿puedes realizar esto de dos formas distintas?
    Debes usar algún ciclo.
*/

const a = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//tu código va aquí vvv
for(let i = 0; i < a.length; i++){
    if(a[i*2]){
        console.log(a[i*2]);
    }
}
//tu código va aquí ^^^

//eof
