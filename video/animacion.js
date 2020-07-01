/*
    play : CLIC EN PLAY
    ended : cuando finaliza el video
    seeking : cuando adelantamos el video
*/

let primero = document.querySelector(".video")

primero.addEventListener("seeking",function(){alert(this.currentTime)})