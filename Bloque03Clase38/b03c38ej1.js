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

const mi_archivo = "mi_archivo.txt";

function miCallback(err, data) {
    //Si por alguna razon el documento no pudo ser leido, se arroja un error
    if (err) throw err;
    //en caso contrario se muestra el contenido del archivo (data)
    console.log(data);
    //completar esto
}
//Se llama una funcion que lee un archivo de texto, lo codifica con utf8 (estandar para caracteres)
//Despues en el archivo obtiene 2 parametros err (errores) y datos (contenido)
readFile(mi_archivo, 'utf8', (err, data) => {
    //Con los 2 parametros, se envian a la funcion de miCallback
    miCallback(err,data);
  });

//tu código va aquí ^^^

//eof
