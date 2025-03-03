// variables globales en todo el documento
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

// Botones para seleccionar tu mascota

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById ('reiniciar')
    sectionReiniciar.style.display = 'none'

    //Dentro de esta funcion ponemos todos los elementos HTML que tenemos que llamar 

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
   
    // eventos de boton, usando funciones creadas mas abajo

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)


    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Funciones para mascotas, estamos llamando a las etiquetas del html y haciendo ifs. Si el elemento es true, esa ha sido la mascota seleccionada

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipeyo = document.getElementById('capipeyo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML ='Hipodoge'
    }
    else if (inputCapipeyo.checked) {
        spanMascotaJugador.innerHTML ='Capipeyo'
    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML ='Ratigueya'
    } 
    else {
        alert('Selecciona una mascota')
    }

    //llamando a la funcion que randomiza la eleccion del enemigo
    seleccionarMascotaEnemigo()
}

// creando una funcion que nos da un resultado random del 1 al 3, asignando una mascota por cada numero

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
       spanMascotaEnemigo.innerHTML = 'Capipeyo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

// creando funciones para ataques, a la vez randomizando los ataques del enemigo

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Tierra'
    } else {
        ataqueEnemigo = 'Agua'
    }

    combate()
}

 // COMBATE
 function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo) { 
        crearMensaje("Empate!")
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == "Tierra" || ataqueJugador == 'Tierra' && ataqueEnemigo == "Agua" || ataqueJugador == 'Agua' && ataqueEnemigo == "Fuego"){
        crearMensaje("Ganaste!")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste!")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
 }

function revisarVidas() { 
    if (vidasJugador == 0) {
        crearResultadoFinal ("Jaja pringao has perdido")
    }
    else if (vidasEnemigo == 0) {
        crearMensajeFinal ("Yay!! Felicidades por ganar")
    } 

}

   

// creando un parrafo que tiene muchos textos dinamicos en javascript y anexandolo al html con el nodo appendchild 

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Atacaste con ' + ataqueJugador + ', tu enemigo atacó con ' + ataqueEnemigo + ' - ' +  resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById ('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

// formula algebra que randomiza un numero entero entre el 1 y el 3 

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// otra manera de llamar al script despues de que se cargue todo el HTML. La funcion iniciarJuego se carga cuando ya se ha leido todo el html y asi evitamos errores de funcionamiento
window.addEventListener('load', iniciarJuego)