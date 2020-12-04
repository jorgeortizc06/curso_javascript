/*
No son recomendables usarlos
alert
confirm
prompt
*/

//alert("Hola a todos \n soy Jorge Ortiz")


/*let a = confirm("Necesita ayuda?")
if (a){
    window.location="ayuda.html"
}else {
    document.write("Dijo que no")
}*/

var a = prompt("Nombre completo", "Nombre")

if(a){
    document.write("Su nombre es: " + a)
}else
    if(a==null){
        document.write("usted puso cancelar")
    
}else{
    document.write("no puso nada")
}
