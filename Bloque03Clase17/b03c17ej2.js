/*
    Este ejercicio debe correr en Node.

    Trata de adivinar si el resultado final de la expresión será true o false.
    Después, ejecuta el código para ver si tuviste razón.
*/

let a = 2;
const b = Boolean(
    (a = undefined || "hola" || (-Infinity && !"") && (a < 5))
    /*   undefined || "hola" ||        true        &&  undefined < 5  */
    /*             "hola"    ||        true        &&         false   */
    /*                      "hola"                 &&         false   */
    /*                                            false               */
    
    /*false*/&& (10 <= 10.5) || !("helicoptero" < "helipuerto") 
    /*false  &&    true      || !(            false           )         */
    /*       false           ||    true                                 */
    /*                      true                                        */
    /*true*/&& !(0 || null && ("100" === 100)) && (0 !== false)
    /*true  && !(0 || null &&       false    ) &&    true     */
    /*true  && !(  null    &&       false    ) &&    true     */
    /*true  && !(  null    &&       false    ) &&    true     */
    /*true  && !(         null               ) &&    true     */
    /*true  &&            true                 &&    true     */
    /*     true                                &&    true     */
    /*                                        true     */
    /* RESPUESTA FINAL: TRUE */
);

console.log("El valor final es: "+b);

//eof
