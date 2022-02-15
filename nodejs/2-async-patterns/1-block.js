/**
 * Blocking
 * Siempre es mejor programar de manera asincrona para evitar bloqueos
 */
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }
    if (req.url === '/about') {
        //blocking code: detiene completamete el programa hasta que se acabe la tarea
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
    //res.end('Error Page')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....')
})