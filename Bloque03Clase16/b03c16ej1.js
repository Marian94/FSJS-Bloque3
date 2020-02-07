/*
    Este ejercicio debe correr en Node.

    Trata de adivinar qué valor booleano tendrán las siguientes comparaciones.
    Ejecuta este ejercicio para saber en cuales tuviste razón.
    ¿Puedes explicar por qué obtenemos esos resultados?
*/

console.log( "10<=10.5: ----------------- "     + (10<=10.5)                );
console.log( "10==\"10\": ----------------- "   + (10=="10")                );
console.log( "10===\"10\": ---------------- "   + (10==="10")               );
console.log( "10==\"diez\": --------------- "   + (10=="diez")              );
console.log( "10==\"ten\": ---------------- "   + (10=="ten")               );
console.log( "10==10.0: ----------------- "     + (10==10.0)                );
console.log( "10===10.0: ---------------- "     + (10===10.0)               );
console.log( "\"\"==0: -------------------- "   + (""==0)                   );
console.log( "\"a\"==1: ------------------- "   + ("a"==1)                  );
console.log( "\"holograma\"<\"holamundo\": -- " + ("holograma"<"holamundo") );
console.log( "true>false: --------------- "     + (true>false)              );
console.log( "true>\"false\": ------------- "   + (true>"false")            );
console.log( "null==undefined: ---------- "     + (null==undefined)         );
console.log( "null==NaN: ---------------- "     + (null==NaN)               );
console.log( "undefined==NaN: ----------- "     + (undefined==NaN)          );
console.log( "-Infinity<Infinity: ------- "     + (-Infinity<Infinity)      );
console.log( "Boolean(undefined): ------- "     + (Boolean(undefined))      );
console.log( "Boolean(\"\"): -------------- "   + (Boolean(""))             );
console.log( "Boolean(1): --------------- "     + (Boolean(1))              );
console.log( "Boolean(-Infinity): ------- "     + (Boolean(-Infinity))      );
console.log( "Boolean(0.0): ------------- "     + (Boolean(0.0))            );
console.log( "Boolean(0.000000001): ----- "     + (Boolean(0.000000001))    );
console.log( "Boolean(-0.000000001): ---- "     + (Boolean(-0.000000001))   );
console.log( "Boolean(\"null\"): ---------- "   + (Boolean("null"))         );
console.log( "Boolean(\" \"): ------------- "   + (Boolean(" "))            );
console.log( "Boolean(''): -------------- "     + (Boolean(''))             );

//eof
