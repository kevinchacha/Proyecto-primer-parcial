let opt = {
    file:{
        demand: true,
        alias:`f`,
        description: `La ruta del archivo csv`
    },
    country:{
        alias:`p`,
        description: 'Permite determinar el país a analizar a través de su código'
    },
    year:{
        alias:`l`,
        default: 10,
        description: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    }
}

let optg = {
    file:{
        demand: true,
        alias:`f`,
        description: `La ruta del archivo csv`
    },
    country:{
        alias:`p`,
        description: 'Permite determinar el país a analizar a través de su código'
    },
    year:{
        alias:`l`,
        default: 10,
        description: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    },
    out:{
        alias:`o`,
        description:`Establece el nombre del archivo donde se almacenrá los resultados.`
    }
}

const argv = require('yargs')
.command('publicar','Crea un archivo co la tabla de multiplicar',opt)
.command('guardar','Guarda los datos de los paises',optg)
.help()
.argv;


module.exports = {
    argv
};