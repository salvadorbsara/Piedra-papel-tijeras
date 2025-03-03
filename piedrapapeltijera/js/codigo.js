function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra"
    }
    else if (jugada == 2) {
        resultado = "Papel"
    }
    else if (jugada == 3) {
        resultado = "Tijera"
    }
    else {
        resultado = "Operación Incorrecta"
    }
    return resultado
}

//1 piedra, 2 papel, 3 tijera
let jugador = 0
let min = 1
let max = 3
let pc = 0 
let triunfos = 0
let derrotas = 0 

while (triunfos < 3 && derrotas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    
    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))

    // COMBATE
    if(pc == jugador) { 
        alert("Empate!")
    } else if(jugador == 1 && pc == 3)   {
        alert("Ganaste!")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1)  {
        alert("Ganaste!")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2)  {
        alert("Ganaste!")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste!")
        derrotas = derrotas + 1
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + derrotas + " veces.")