# Proyecto-primer-parcial
### Integrantes: Jonathan Mañay, Esteban Carrera, Anthony Cabezas, Kevin Chacha, Boris Tapia
Pasos para la utilización de esta herramienta
La herramienta permite generar un archivo txt con los datos obtenidos desde un archivo de tipo csv

1. Clonar el repositorio del proyecto con el siguiente comando:

git clone https://github.com/kevinchacha/Proyecto-primer-parcial.git

2. Ingresamos a la carpeta clonada del proyecto 

cd Proyecto-primer-parcial

3. Debemos descargar unicamente el CSV de la pagina https://datos.bancomundial.org/indicador/IT.CEL.SETS 
descargar el archivo "API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv" y agregar el path del mismo.


4. Instalar las siguientes librerías:

INSTALAR LIBRERIA MEDIANTE NPM SCRIPT

Instalar Yargs:
#### npm run instalar_Yarg 

Instalar Fs:
#### npm run instalar_fs

Instalar libreria Chalk (colores):
#### npm run instalar_colores

INSTALAR MEDIANTE COMANDOS

Para instalar yargs:
npm i yargs

Para instalar el Fs:
npm install file-system --save

Para los colores :
npm install chalk

#### NOTA(INSTALAR USANDO COMANDOS SOLO SI NO FUNCIONA LOS NPM SCRIPT)

5. EJECUTAMOS EL PROGRAMA :

Ejemplo para la ejecucion de publicar: 

#### npm run ejemplo_Mostrar 

O ejecutar el siguiente comando

node app.js publicar  --file API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv --country AUS --year 2018

Ejemplo para la ejecucion de guardar:

#### npm run ejemplo_Guardar

O ejecutar el siguiente comando

node app.js guardar --file API_IT.CEL.SETS_DS2_es_csv_v2_485339.csv --country ARG  --year 1994  --out eje

DATOS:

--file -f: Permite establecer el path del archivo CSV que
contiene los datos a analizar

--country -c: Permite determinar el país a analizar a través
de su código ISO 3166 ALPHA-3.

--year -y: Permite especificar el año para el cual se
requiere las estadísticas. Por defecto, 2018


--out -o: Establece el nombre del archivo donde se almacenrá
los resultados.



