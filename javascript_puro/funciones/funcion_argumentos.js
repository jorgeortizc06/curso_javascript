//funcion con return
var sumar = function (x, y) {
    return (x+y)
}
console.log(sumar(10,9))

//funcion anonimas autoejecutables
/**Este patrón consiste en
crear una expresión de función e inmediatamente ejecutarla */
/*(function(){
    var foo = 'Hola mundo desde una funcion anonima';
    })();
console.log(foo)*/

//funciones como argumentos
var myFn = function (fn){
    var result = fn();
    console.log(result)
}

//Pasar una función anónima como un argumento
myFn(function(){return 'hola mundo de la funcion simple'})

//Pasar una función nombrada como un argumento
var funcion2 = function(){
    return 'Soy hola mundo de la funcion 2'
}

myFn(funcion2)