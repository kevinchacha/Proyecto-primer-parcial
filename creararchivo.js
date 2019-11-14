const fs=require('fs');
const chalk = require('chalk');

function crear(nombre,contenid){
    fs.writeFile(`./${nombre}.txt`, `${contenid}`, error => {
        if (error)
          console.log(error);
        else
          console.log(chalk.blue('El archivo fue creado'));
      });
}

a=crear('esteban','perrito')
fs.readFile(`./esteban.txt`,leer);

console.log('EL CONTENIDO ES ');

function leer(error,datos){
    if (error)
      console.log(error);
    else
      console.log(datos.toString());
}

module.exports = {
    //Se puede dar un nombre de propiedad por ejemplo crearArchivo: crearArchivo
    leer,crear
};