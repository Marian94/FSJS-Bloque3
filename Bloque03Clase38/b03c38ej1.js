/*
    Este ejercicio debe correr en Node.

    Guarda en mi_archivo la ruta completa de algún archivo que tenga texto.
    Usa el código incluido para leer su contenido usando callbacks.

    Ayúdate con la documentación:

    https://www.smashingmagazine.com/2019/10/asynchronous-tasks-modern-javascript/
    https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    Una vez leído su contenido, imprímelo en la terminal.
*/

const { readFile } = require('fs');

//tu código va aquí vvv

const mi_archivo = "";

function miCallback(err, data) {
    //completar esto
}

fs.readFile(mi_archivo, /*aquí falta algo...*/);

//tu código va aquí ^^^

//eof
