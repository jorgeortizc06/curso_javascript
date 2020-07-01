/*var semana = new Array(
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
);*/

/*
    length : permite ver su longitud
    push: introduzco datos
    pop: veo el ultimo elemento
    join: convierte un arreglo en un string comun y corriente
    split: a la inversa de join
    array.from //lo llama desde html
    sort: lo ordena de forma alfabetica
    reverse: orden al revez de sort
    --------------
    for in : recorre el array
    forEach: no lo se
    find: busca un texto, devuelve el primer resultado
    findIndex: busca su indice
    filter: busca un texto y devuelve todos los resultados
    some: retur true or false con una condicion
*/
var semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
  456326,
];

var buscar = semana.find(dos => dos == "jueves")

for (var i = 0; i < semana.length; i++) {
  document.write(semana[i] + "<br>");
}

//mas efectivo es usar
document.write("forma efectiva <br>")
for(let i in semana){
    
    document.write(semana[i] + "<br>")
}

var uno = [
  [10, 20, 30, 40, 50],
  [11, 22, 33, 44, 55],
  [12, 33, 26, 37, 43],
];

for (var i = 0; i < uno.length; i++) {
  for (var j = 0; j < uno[i].length; j++) {
    document.write(uno[i][j] + " ");
  }
  document.write("<br>");
}

document.write(uno.pop() + "<br>");
document.write(uno.join());

//no funciona el mapeo
var semana1 = Array.from(document.querySelectorAll(".dias p"));
var creacion = semana1.map(dia => dia.textContent());
console.log("Lo que hay en html")
console.log(creacion)

var uno = [10,20,30,40,50,60,70,80,90,100]
var buscar = uno.some(dos => dos<50); //hay valores menores a 50?, is true