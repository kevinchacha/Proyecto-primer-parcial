const fs=require('fs');
const chalk = require('chalk');
const {argv} = require('./config/yargs.js')

const{leercsv,generardatos} = require('./archivos/conexion.js');

let comando = argv._[0]
console.log(comando)
switch(comando){
    case 'publicar':
        leercsv(argv.file)
        .then(archivo =>{
            generardatos(archivo,argv.year,argv.country).then(archivo2 =>{
            
            console.log(chalk.blue(archivo2))
            }).catch((err)=> console.log("error: ",err))
        }).catch((err)=> console.log("error: ",err))
        break;
    case 'guardar':
        leercsv(argv.file)
        .then(archivo =>{
            generardatos(archivo,argv.year,argv.country).then(archivo2 =>{
                fs.writeFile(`./${argv.out}.txt`, `${archivo2}`, error => {
                    if (error)
                      console.log(error);
                    else
                      console.log(chalk.green('El archivo fue creado'));
                      console.log(chalk.blue(archivo2));
                  });
            }).catch((err)=> console.log("error: ",err))
        }).catch((err)=> console.log("error: ",err))
        break;
    default:
        console.log('Comando no valido!')
};