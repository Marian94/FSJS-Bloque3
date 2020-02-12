/*
    Este ejercicio debe correr en Node.

    Trata de adivinar qué valor booleano tendrán las siguientes comparaciones.
    Ejecuta este ejercicio para saber en cuales tuviste razón.
    ¿Puedes explicar por qué obtenemos esos resultados?
*/

console.log( "10<=10.5: ----------------- "     + (10<=10.5)                ); //true ya que ambos son valores numericos y cumplen la condicion que 10.5 es mayor o igual a 10
console.log( "10==\"10\": ----------------- "   + (10=="10")                ); //true ya que  toma el valor del string 10  y del numero 10 y ambos son iguales
console.log( "10===\"10\": ---------------- "   + (10==="10")               );//false, ya que 10 es un numero y "10" es un strings
console.log( "10==\"diez\": --------------- "   + (10=="diez")              );//false ya que el valor del string diez es diferente del valor numerico 10
console.log( "10==\"ten\": ---------------- "   + (10=="ten")               );//false ya que el valor del string ten es diferente del valor numerico 10
console.log( "10==10.0: ----------------- "     + (10==10.0)                );//true ya que aun con decimales, ambos son numero enteros y 10.0 = 10
console.log( "10===10.0: ---------------- "     + (10===10.0)               );//tue ya que ambos son del mismo tipo y mismo valor de numero entero
console.log( "\"\"==0: -------------------- "   + (""==0)                   );//true ya que por coersion  compara el valor de vacio (0) con 0
console.log( "\"a\"==1: ------------------- "   + ("a"==1)                  );//false ya que el string a no tiene el mismo valor que un numero 1
console.log( "\"holograma\"<\"holamundo\": -- " + ("holograma"<"holamundo") );///true, ya que hola tiene mayor peso que holo
console.log( "true>false: --------------- "     + (true>false)              );//true ya que true dentro tiene valor 1 y false tiene valor 0
console.log( "true>\"false\": ------------- "   + (true>"false")            );//false ya que true dentro tiene valor 1 y el string false tiene otro tipo de valor
console.log( "null==undefined: ---------- "     + (null==undefined)         );//true ya que ambos valores tienden a ser falsy
console.log( "null==NaN: ---------------- "     + (null==NaN)               );//false ya que aunque ambos valores son falsy, NaN es de tipo numero
console.log( "undefined==NaN: ----------- "     + (undefined==NaN)          );//false ya que aunque ambos valores son falsy, NaN es de tipo numero
console.log( "-Infinity<Infinity: ------- "     + (-Infinity<Infinity)      );//true ya que -Infinity es un numero negativo e Infinity es positivo
console.log( "Boolean(undefined): ------- "     + (Boolean(undefined))      );//false ya que es un valor Falsy por ser un valor no asignado
console.log( "Boolean(\"\"): -------------- "   + (Boolean(""))             );//false ya que es un valor Falsy por ser una cadena vacia
console.log( "Boolean(1): --------------- "     + (Boolean(1))              );//true ya que es un valor Truthy por ser un valor diferente de 0
console.log( "Boolean(-Infinity): ------- "     + (Boolean(-Infinity))      );//true ya que es un valor Truthy por ser un valor diferente de 0
console.log( "Boolean(0.0): ------------- "     + (Boolean(0.0))            );//false ya que es un valor Falsy por ser un valor 0
console.log( "Boolean(0.000000001): ----- "     + (Boolean(0.000000001))    );//true ya que es un valor Truthy por ser un valor diferente de 0
console.log( "Boolean(-0.000000001): ---- "     + (Boolean(-0.000000001))   );//true ya que es un valor Truthy por ser un valor diferente de 0
console.log( "Boolean(\"null\"): ---------- "   + (Boolean("null"))         );//true ya que es un valor Truthy por ser una cadena que no esta vacia
console.log( "Boolean(\" \"): ------------- "   + (Boolean(" "))            );//true ya que es un valor Truthy por ser una cadena que contiene un espacio lo que no lo hace una cadena vacia
console.log( "Boolean(''): -------------- "     + (Boolean(''))             );//false ya que es un valor Falsy por ser una cadena vacia

//eof
