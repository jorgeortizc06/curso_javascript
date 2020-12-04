/*
son ejemplos representativos
*/
//numbers
let a = "Hola";
let b = isNaN(a); //isNaN: Esto no es un numero: true
//
let a = 15;
let b = Number.isInteger(a); //si es un numero: true
//
let a = 15.4556676;
var b = a.toFixed(1); //muestra solo un decimal con redondeo: 15.5
//
let a = "12.5";
let b = Number(a); //Lo transforma a Number
//
let a = 19.5;
let b = parseInt(a); //Lo transforma a int: 19
let c = parseFloat(a); //Lo tranforma a flotante: 19.5
let d = a.toString(); //Lo convierte a cadena. 5 + 5 = 55 porque lo concatena

document.writeln(typeof b); //typeof: tipo de dato

///string
/*
    length(): tamaño de la cadena
    --------------------BUSQUEDAS-------------
    string.Metodo() nomenclatura
    indexOf(string): me devuelve la posicion de la primera palabra
    lastIndexOf(string) me devuelve la posicion de la ultima palabra
    search(string) funciona igual que indexOf
    matchstring retorna un array de palabras iguales
    substr(i,f): indicas el indice inicial y final
    substring(i,f)
    chartAt(i): devuelve solo el valor del indice
    startWith(string): verifica si la cadena empieza con esa palabra true false
    endsWith(string): verifica si la ultima palabra del string empieza true false
    includes(string): verifica si existe esa palabra en la cadena true false
    -----------------------
    repeat(10): repite 10 veces el texto
    replace("palabra a reemplazar", "texto"):
    slice(indice): comienza a leer desde el indice 5
    split(","): lo convierte en un array con separador ","
    trim(): elimina los espacios
    toLowerCase(): pasa a todo minuscula
    toUpperCase(): pasa a todo mayuscula
    concat(strin1,string2): concatena cadenas
*/
let a = "Hola a ' todos"; // \ esta barra es como un escape, ignora la comilla simple y lo imprime
let b = a.length; //el tamaño de la cadena

let a = "Hola como estan a todos mis amigos....estan";
document.write(a.indexOf("amigos")); //return 28
document.write(a.match(/estan/gi)); ///return estan,estan
document.write(a.substr(5, 10)); //se ubica en el indice 5, a partir de alli cuenta 10. Return "como estan"
document.write(a.substring(5, 11)); //esta vez cuenta desde el principio. return "como"
document.write(a.startsWith("Hola")); //return true
document.write(a.repeat(10)); //repite 10 veces a
document.write(a.trim()); //quita los espacios
