window.name = "Ponderosa";

var dato = "El nombre es: " + window.name + "<br>";
//mide sin considerar el scroll
var ancho = "El ancho es: " + window.outerWidth + "<br>";
var alto = "El alto es: " + window.outerHeight + "<br>";
//mide el ancho considerando el scroll
var anchoInterno = "El ancho interno es " + window.innerWidth + "<br>";
var altoInterno = "El alto interno es " + window.innerHeight + "<br>";
var scrollHorizontal =
  "El scroll horizontal es: " + window.pageXOffset + "<br>";
var scrollVertical = "El scroll vertical es: " + window.pageYOffset + "<br>";
var distanciaIzquierda =
  "El distancia desde la izquierda es: " + window.screenX + "<br>";
var distanciaSuperior =
  "La distancia desde la derecha es: " + window.screenY + "<br>";

document.write(
  dato,
  ancho,
  alto,
  anchoInterno,
  altoInterno,
  scrollHorizontal,
  scrollVertical,
  distanciaIzquierda,
  distanciaSuperior
);

function imprimir() {
  window.print();
}
