/* esto no se comporta como se desea; */
/* cada click mostrará una ventana de alerta con el valor 5 */

//establezco el valor de i utilizando una clausura
//Clausurar el valor de i dentro de createFunction
var createFunction = function (i) {
  return function () {
    alert(i);
  };
};

$(document).ready(function () {
  //se ejecuta despues de cargar la pagina
  for (var i = 0; i < 5; i++) {
    $("<p>hacer click</p>").appendTo("body").click(createFunction(i));
  }
});

var outerObj = {
  myName: "externo",
  outerFunction: function () {
    // provee una referencia al mismo objeto outerObj
    // para utilizar dentro de innerFunction var self = this;
    var self = this;
    var innerObj = {
      myName: "interno",
      innerFunction: function () {
        console.log("soy innerFunction: " + self.myName, this.myName); // registra 'externo interno'
      },
    };

    innerObj.innerFunction();

    console.log(this.myName); // registra 'externo'
  },
};

outerObj.outerFunction();
