
const fs = require('fs');

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
                
                var dist=datos[4].split(",")
                
                var pos1=0
                
                for (var i=0; i < dist.length; i++) {
                    var limit=dist[i]
                    
                    if (parseInt(dist[i].substring(1,limit.length-1), 10)==año){
                        
                        var pos1=i
                    }
                 }
                 limite=33
                 let data = '';
                 for (var i=4; i < datos.length; i++) {
                    try{
                    
                    var datos2=datos[i].split(",")
                    var datos3=datos2[1].substring(1,4)
                    
                    if (datos3==pais){
                        limit2=datos2[pos1].length -2
                        var numero=datos2[pos1].substring(2,limit2)
                        data += "Nombre pais:\t"+datos2[0].substring(1,10)+"\n";
                        data +="Numeros de subscripciones:\t"+datos2[pos1].substring(2,limit2)+"\n";
                    }
                  }
                  catch(err){

                  }
                     
                 }
                 var num=0
                 var cont=0
                 var lis5num=[]
                 var dicnum5={}
                 var listop5=[]
                 var dictop5=[]
                 for (var i=5; i < datos.length; i++) {
                    var datos5=datos[i].split(",")
                    try{
                     limite2=datos5[pos1].length-2
                     if((!isNaN(parseInt(datos5[pos1].substring(2,limite2), 10))) && (parseInt(datos5[pos1].substring(2,limite2), 10)!=0)){
                     num+=parseInt(datos5[pos1].substring(2,limite2), 10)
                     cont+=1
                     listop5.push(num)
                     dictop5[datos5[0].substring(1,datos5[0].length-1)]=num
                     if(numero>num){
                         lis5num.push(num)
                         dicnum5[datos5[0].substring(1,datos5[0].length-1)]=num
                     }
                    }
                     }
                    catch(err)
                    {
                        
                    } 

                }
                lis5num=lis5num.sort()
                lis5num=lis5num.slice(lis5num-5)
                listop5=listop5.sort()
                listop5=listop5.slice(listop5.length-5)                 
                 media=Math.round(num/cont)
                 data+="Media de subcripciones:\t"+media+"\n"
                 if (media > numero){
                     data+="La media de subscripciones:\t"+media+" es mas alta que el numero de subcripcioes: \t"+numero+"\n"
                 }
                 else{
                    data+="El numero de subscripciones \t"+numero+" es mas alta que la media de subscripciones: \t"+media+"\n"
                 }
                 data+="\nTOP 5 PAISES POR DEBAJO DE:"+numero+"\n"
                 for (key in dicnum5) {
                    for(var i=0; i < lis5num.length; i++){
                        if(dicnum5[key]==lis5num[i]){
                            data+=key+" : "+lis5num[i]+"\n"
                        }
                    
                 }  
                }
                data+="\nTOP 5 PAISES EN EL AÑO:"+año+"\n"
                 for (key in dictop5) {
                    for(var i=0; i < listop5.length; i++){
                        if(dictop5[key]==listop5[i]){
                            data+=key+" : "+listop5[i]+"\n"
                        }
                    
                 }  
                }
                resolve(data)
            });
        };





module.exports = {
	leercsv: leercsv,
	generardatos: generardatos
}


