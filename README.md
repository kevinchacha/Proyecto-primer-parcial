# Proyecto-primer-parcial
Pasos para la utilización de esta herramienta
La herramienta permite generar un archivo txt con los datos obtenidos desde un archivo de tipo csv

1. Debemos descargar unicamente el CSV de la pagina https://datos.bancomundial.org/indicador/IT.CEL.SETS 
descargar este archivo

API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv

2.Pasos para la ejecucion

DATOS:

--file -f: Permite establecer el path del archivo CSV que
contiene los datos a analizar

--country -c: Permite determinar el país a analizar a través
de su código ISO 3166 ALPHA-3.

--year -y: Permite especificar el año para el cual se
requiere las estadísticas. Por defecto, 2018


--out -o: Establece el nombre del archivo donde se almacenrá
los resultados.

EJEMPLOS DE EJECUCION :
publicar:
node app.js publicar  --file path --country codigopais --year año pais

Ejemplo para la ejecucion de publicar 
node app.js publicar  --file API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv --country AUS --year 2018

guardar:
node app.js guardar  --file API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv --country codigopais --year año pais --out nombrearchivo

Ejemplo para la ejecicion de guardar
node app.js guardar  --file 'path' --country AUS --year 2018 --out nombredelarchivo

librerias que se necesita :
Para instalar yards:
npm install --save yard
Para instalar el Fs:
npm install file-system --save
Para los colores :
npm install chalk
