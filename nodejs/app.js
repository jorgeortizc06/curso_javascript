const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function(nombre){
    this.nombre = nombre
}

util.inherits(Persona, eventEmitter);

let persona = new Persona('Bob');

persona.on('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`);
})

persona.emit('hablar', 'Hoy es un gran dia')

/*
No es tan util, se configura muchas veces

const events = require('events')
const emitter = new events.EventEmitter()

//create event call eventoCustom
emitter.on('eventCustom', (mensaje, status) => {
    console.log(`${status}: ${mensaje}`);
})

//call event
emitter.emit('eventCustom', 'Mensaje cargado con exito', 200)


 */