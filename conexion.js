
const fs = require('fs');
function agregar(path){
        
          console.log(path)
           };
let leercsv = (path) =>{
            return new Promise((resolve, reject) =>{
                fs.readFile(path, 'utf8', function (err, data) {
                    
                    if (err){
                        reject(err);
                    } else {
                        dataArray2 = data.split(/\r?\n/)
                        resolve(dataArray2);
                    }
                  });
            });
        };
let generardatos = (datos,año,pais) =>{
            return new Promise((resolve, reject) =>{
                console.log(datos[4][3])
                let dist=datos[4]
                console.log(dist.length)
                console.log(pais)
                
                for(let i=0; i<=dist.length; i++){
                    if(año == datos[4][i]){
                        let pos=i
                    }
                }
                for(let j=0; j<=datos.length; j++){
                    if(pais == datos[j][4]){
                        let pos2=j
                    }
                }
                console.log(pos,pos2)
                resolve("funciono")
            });
        };


leercsv("API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv")
.then(archivo =>{
    generardatos(archivo,1999,"ALB").then(archivo2 =>{
        console.log(archivo2)
    }).catch((err)=> console.log("error: ",err))
}).catch((err)=> console.log("error: ",err))


module.exports = {
	leercsv: leercsv,
	generardatos: generardatos
}


