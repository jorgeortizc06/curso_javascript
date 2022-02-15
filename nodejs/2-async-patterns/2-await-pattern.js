const {readFile, writeFile} = require('fs').promises
//Esto puede ser reemplado con .promises
/*
const util = require('util')
const readFilePromise = util.promisify(readFile) //promesas ya construidas
const writeFilePromise = util.promisify(writeFile) //promesas ya construidas
*/
//.end Esto puede ser reemplazado con .promise

//NODE NATIVE OPTION
const getText = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        //const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFile('./content/first.txt', 'utf8')
        //const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFile(
            './content/result-mind-grenade.txt',
            `This is awesome: ${first} ${second}`,
            { flag: 'a'} //no vuelve a crear el archivo, continua escribiendo
        )
        /*await writeFilePromise(
            './content/result-mind-grenade.txt',
            data,
            { flag: 'a'} //no vuelve a crear el archivo, continua escribiendo
        )*/
        console.log(first)
        console.log(second)
    }catch (err){
        console.log(err)
    }

}

getText()

//.END NODE NATIVE OPTION


// MANERA MANUAL
/*
const getFile = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}*/


// getText('./content/first.txt').then((data)=>{
//     console.log(data)
// })
/*
const getText = async () => {
    const first = await getFile('./content/first.txt')
    const second = await getFile('./content/second.txt')
    console.log(first)
    console.log(second)
}

getText()
 */

//END MANERA MANUAL