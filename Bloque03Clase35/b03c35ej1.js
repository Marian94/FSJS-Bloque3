/*
    Este ejercicio debe correr en Node.

    Este ejercicio es un reto complicado.
    No te desesperes y pide ayuda si la necesitas.

    Crea un arreglo que tenga sólo números enteros.
    Debe ser un arreglo grande (al menos 10 elementos).

    Ordena el arreglo de menor a mayor.

    Conoce el álgoritmo de búsqueda binaria:
    https://youtu.be/m2-e2O7wvbk

    Implementa este algoritmo de forma recursiva.
*/

//tu código va aquí vvv
//En esta funcion recursiva, tenemos como parametro el arreglo, el numero a buscar, el indice del inicio del arreglo (0) y el ultimo indice
let funcionRecursiva = function (arr, numero, inicio, fin) { 
    //Condicion de parada, cuando el inicio tenga un indice mayor que el final
    if (inicio > fin) return false; 
   
    // Buscamos el valor de enmedio de la longitud del arreglo
    //ya que necesitamos un numero entero se utiliza un floor
    let mid=Math.floor((inicio + fin)/2); 
   
    // Se revisa si el numero buscado esta en la mitad del arreglo
    if (arr[mid]===numero) return true; 
          
    // Si el elemento de enmedio es mayor al numero entonces busca en la mitad de la izquierda
    // Si es mayor, lo busca en la mitad de la derecha

    return (arr[mid] > numero) ?  funcionRecursiva(arr, numero, inicio, mid-1) :  funcionRecursiva(arr, numero, mid+1, fin); 
} 
let arr = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21]; 
let numero = 5; 
   
if (funcionRecursiva(arr, numero, 0, arr.length-1)) 
    console.log("Numero encontrado! "+numero); 
else console.log("No se encuentra el numero en el arreglo! "+ numero); 
   
numero = 8; 
   
if (funcionRecursiva(arr, numero, 0, arr.length-1)) 
    console.log("Numero encontrado! "+numero); 
else console.log("No se encuentra el numero en el arreglo! "+numero); 


//tu código va aquí ^^^

//eof
