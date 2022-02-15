//lectura y escritura de archivos de manera asyncrona

const {readFile, writeFile} = require('fs')
console.log('start') // 1. ejecuta
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)

    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result) //3er ejecuta

        const second = result

        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    return
                }
                console.log(result)
                console.log('done with this task')// 4. ejecuta
            }
        )
    })
})


console.log('starting the next one') //2 ejecuta