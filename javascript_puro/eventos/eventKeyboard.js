//keydown: Haz oprimido una tecla
//keypress: mantener
//keyup: despues de soltar la tecla
//funcion(){lineas a escribir} //es una funcion anonima
/*window.addEventListener("keypress",function(){alert("Haz mantenido una tecla")})*/
window.addEventListener("keydown", function(){
    this.alert(String.fromCharCode(event.keyCode))
})