/*
    Este ejercicio debe correr en Node.

    Trata de adivinar si el resultado final de la expresión será true o false.
    Después, ejecuta el código para ver si tuviste razón.
*/

let a = 2;
const b = Boolean(
    (
        (
            (a = undefined)
        ) || (
            "hola"
        ) || (
            (
                -Infinity
            ) && !(
                ""
            )
        ) && (
            (a < 5)
        )
    ) && (
        (10 <= 10.5)
    ) || (
        !(
            ("helicoptero" < "helipuerto")
        )
    ) && !(
        (
            0
        ) || (
            null
        ) && (
            ("100" === 100)
        )
    ) && (
        (0 !== false)
    )
);

console.log("El valor final es: "+b);

//eof
