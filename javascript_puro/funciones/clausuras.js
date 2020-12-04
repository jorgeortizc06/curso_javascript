/* esto no se comporta como se desea; */
/* cada click mostrará una ventana de alerta con el valor 5 */

var createFunction = function (i) {
    return function () {
        alert(i)
    }
}

$(document).ready(function () { //se ejecuta despues de cargar la pagina
    for (var i = 0; i < 5; i++) {
        $('<p>hacer click</p>').appendTo('body').click(createFunction(i));
    }
});