const express = require('express') //importo express

const app = express()
const PORT = 3000

//****************Middleware *********/
//Antes de pasar por las rutas primero va el middleware, es opcional.
//Funciona como bloqueantes hasta que llame el metodo next
// USER -> EXPRESS -> MIDDLEWARE -> MANEJADOR DE RUTAS
const checkAuth  = (config) =>{
    const message = config.message || 'Debes iniciar session 🌮'

    return (req, res, next) => {
        const isAuth = false //true, pasa al manejador de rutas, false: no
        if (isAuth){
            next()
        }else{
            res.send(message)
        }
    }
}


//app.use(checkAuth) se usa para una ruta general
//para usar el middleware en una determinada ruta
//***************MANEJADOR DE RUTAS**************** */
app.get('/publica', (req,res) =>{
    res.send(`
        <h1>Ruta publica</h1>
    `)
})

//uso del middleware
const isAuthCustom = checkAuth({
    message: 'Please Login ⌛'
})
app.get('/privada', isAuthCustom,(req,res) =>{
    res.send(`
        <h1>Ruta privada 🐼</h1>
    `)
})


app.get('/', (req, res) => {
    res.send(`
        <h1>Hola mundo</h1>
        <h2>Jorge Ortiz</h2>
    
    `)
})

app.get('/sandia',(req,res)=>{
    res.send(`
        <h1>🍉</h1>
    `)
})

//Rutas dinamicas con rutas
app.get('/manzana/:color?',(req,res)=>{ //ingreso parametros, ? significa que es opcional
    const { color = 'desconocido' } = req.params //color = 'valor en caso de que no ingrese el parametro'
    res.send(`
        <h1>🍎:${color}</h1>
    `)
})

app.get('/cervezas', (req, res) => {
    res.send(`
        <style>
            a {
                display:block;

            }
        </style>
        <a href="/cerveza/Corona">🍺 Corona</a>
        <a href="/cerveza/Duff">🍺 Duff</a>
        <a href="/cerveza/Heineken">🍺 Heineken</a>
        <a href="/cerveza/Budweiser">🍺 Budweiser</a>   
    `)
})

app.get('/cerveza/:marca?',(req,res)=>{
    const { marca } = req.params

    if (!marca) { //si no hay marca
        return res.send(`<h1>Debes indicar el nombre de la marca`)
    }


    res.send(`
        <h1>🍺:${marca}</h1>
    `)
})

//rutas dinamicas con Query Strings
app.get('/degradado', (req, res) =>{ //http://localhost:3000/degradado?color2=purple&rotacion=30
    const {
        color1 = 'black', //valores por defecto en caso de que no ingrese los parmetros
        color2 = 'gray',
        rotacion = 60
    } = req.query


    res.send(`
    <style>
        body {
            background: linear-gradient(${rotacion}deg, ${color1}, ${color2});
        }
    </style>    
    <body>

    </body>
    `)
})

//*****rutas avanzadas con expresiones regulares
//ticket-\d{5}/ : ruta ticket-5digitos
//  /(api|rest)/ :ruta solo api o rest
app.get('/user/:id([0-9]{4})', (req, res) =>{ //solo numeros con 4 digitos
    res.send(`
        <h1>Ruta con RegExo 🌩</h1>
    `)
})

//********Recursos: Verbos HTTP */
app.get('/foto', (req, res) => {
    res.send('<h1>Obtengo foto 📷</h1>')
})
 
//para probar, es recomendable postman
app.post('/foto', (req, res) => {
    res.send('<h1>Creo foto 📷</h1>')
})

app.put('/foto', (req, res) => {
    res.send('<h1>Actualizo foto 📷</h1>')
})

app.delete('/foto', (req, res) => {
    res.send('<h1>Elimino foto 📷</h1>')
})

//Ruta: en caso de que no encuentre la ruta, debe estar al final.
//Si esta al principio, solo leeria esta ruta y las demas no
app.get('*',(req, res) => {
    res
    .status(404)
    .send(`
        <h1>Pagina no encontrada</h1>
    `)
})

//****************SERVIDOR**************** */
app.listen(PORT, ()=>{
    console.log(`
        Servidor corriendo en:
        localhost:${PORT}
    `)
})