const fs = require('fs');
const chalk = require('chalk');
const { argv } = require('./config/yargs.js')

const { leercsv, generardatos } = require('./archivos/conexion.js');

let comando = argv._[0]
console.log(comando)
switch (comando) {
    case 'publicar':
        leercsv(argv.file)
            .then(archivo => {
                generardatos(archivo, argv.year, argv.country).then(archivo2 => {
                    const http = require('http');

                    const hostname = '127.0.0.1';
                    const port = 3000;

                    const server = http.createServer((req, res) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end(archivo2);
                    });

                    server.listen(port, hostname, () => {
                        console.log(`Para probar la página por favor ingrese a; http://${hostname}:${port}/`);
                    });
                    console.log(chalk.blue(archivo2))
                }).catch((err) => console.log("error: ", err))
            }).catch((err) => console.log("error: ", err))
        break;
    case 'guardar':
        leercsv(argv.file)
            .then(archivo => {
                generardatos(archivo, argv.year, argv.country).then(archivo2 => {
                    fs.writeFile(`./${argv.out}.txt`, `${archivo2}`, error => {
                        if (error)
                            console.log(error);
                        else
                            console.log(chalk.green('El archivo fue creado'));
                        console.log(chalk.blue(archivo2));
                    });
                }).catch((err) => console.log("error: ", err))
            }).catch((err) => console.log("error: ", err))
        break;
    default:
        console.log('Comando no valido!')
};