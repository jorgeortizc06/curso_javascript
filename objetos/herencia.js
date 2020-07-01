class Animal {
  constructor(tipo, raza) {
    this.tipo = tipo;
    this.raza = raza;
  }
}

//extends, la clase padre es animal
class Domesticos extends Animal {
  constructor(tipo, nombre, edad, peso) {
    super(tipo);
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
  }
}

var animal1 = new Domesticos("Hogar", "Manchas", 2, 3)
var animal2 = new Domesticos("Hogar", "George", 5, 4)

document.write(animal1.tipo, animal1.nombre)