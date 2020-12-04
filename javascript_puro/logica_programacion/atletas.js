/*
CASO 1. LOS CUATRO ATLETAS

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente
detras de B, y D ha llegado en medio de A y C. ¿Podria usted calcular el orden de
de llegada?

B
C
D
A
*/

let corredores = {
    A:  0,
    B:  0,
    C:  0,
    D:  0,
    resultado: function(){
    
        if (corredores.C > corredores.B && 
            corredores.D > corredores.B &&
            corredores.D > corredores.C &&
            corredores.D < corredores.A
            ){
                return true;
            }
            return false;
    },
    intervalo: setInterval(function () {
        //ceil: redondea hacia arriba
        corredores.A = Math.ceil(Math.random()*4)
        corredores.B = Math.ceil(Math.random()*4)
        corredores.C = Math.ceil(Math.random()*4)
        corredores.D = Math.ceil(Math.random()*4)
        console.log("VERIFICANDO POSICIONES")
            if(corredores.resultado()){
                clearInterval(corredores.intervalo);
                console.log("Attleta A", corredores.A)
                console.log("Attleta B", corredores.B)
                console.log("Attleta C", corredores.C)
                console.log("Attleta D", corredores.D)
            }
        },10),
}

