//javascript funciona de manera asyncrona: es decir no hay que esperar a que una funcion termine su ejecucion
//se almacenan como tipo de cola
//Nodejs se ejecuta a nivel de procesos
/*
es como el static void main de java
exec: node 03-process.js --nombre "Marcos" --edad 25
[
  '/home/jorge/.nvm/versions/node/v16.14.0/bin/node',
  '/home/jorge/casaortiz/nodejs/tutorial/tutorialof-VidaMrr/03-process.js',
  '--nombre',
  'Marcos',
  '--edad',
  '25'
]
 */
console.log(process.argv) //obtengo argumentos para los procesos

function param(p){
    var index = process.argv.indexOf(p);
    //console.log(index)
    return process.argv[index + 1]
}

var nombre = param('--nombre')
var edad = param('--edad')
console.log(`Tu nombre es ${nombre}, y tienes ${edad} anios`)