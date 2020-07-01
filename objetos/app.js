/*
OBJETO {
    Propiedades (variables)
    -cabeza
    -patas
    -cola
    Metodos (funciones)
    -maullar
    -caminar
    -saltar
}
*/

class Gato {
  constructor(nombre, edad, peso) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
  }

  correr(){
    document.write("El gato corre <br>");
  }
}

var gato1 = new Gato("Pepelico", 12, 6);
var gato2 = new Gato("Manchas", 2, 5);

gato1.correr()