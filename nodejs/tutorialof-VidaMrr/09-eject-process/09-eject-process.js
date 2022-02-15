/*
Ejecutar un proceso como ls, cd, llamadas de programas, etc
 */

const exec = require('child_process').exec

exec('ls', (err, stdout) => {
    if(err){
        throw err;
    }

    console.log('Comando Ejecutado')
    console.log(stdout)


})

exec('pwd', (err, stdout) => {
    if(err){
        throw err;
    }

    console.log('Comando Ejecutado')
    console.log(stdout)
})

const x = 5
const y = 29

//proceso ejecutado desde un archivo bash
exec(`./script.sh ${x} ${y}`, (err, stdout) => {
    if(err){
        throw err;
    }

    console.log('Comando Ejecutado')
    console.log(stdout)
})