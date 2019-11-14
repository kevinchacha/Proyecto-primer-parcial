
const fs = require('fs');
let extraerdatos = (path) => {
    return new Promise((resolve,reject)=>{
        fs.readFile('API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv', 'utf8', function (err, data) {
            var dataArray2 = data.split(/\r?\n/)
            if(Number(path)){
                reject("error")
            }
            resolve(dataArray2);
           });
    });
    
}
var datos=extraerdatos("hola").then(datos)
 console.log(datos)