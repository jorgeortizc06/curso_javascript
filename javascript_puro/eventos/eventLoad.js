/*
Eventos de carga y temporizador
*/


//Despues de cargar la pagina hace una funcion
//window.addEventListener("load", function(){alert("Se ha cargado")})

/*temporizador:
    setInterval(funcion,tiempo) //indefinida
    setTimeout(funcion, tiempo) //se ejecuta una sola vez


var tiempo = setInterval(
    function(){
        document.write("TEXTO DE EJEMPLO <br>")
    }, 2000
)
*/

var tiempo = setTimeout(
    function(){
        document.write("TEXTO DE EJEMPLO <br>")
    }, 3000
)