let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
   
    // quiero que el boton responda cuando yo seleccione personaje, tiene que estar dentro de la funcion iniciar juego para que el codigo no se ejecute hasta que el navegador haya cargado todo el HTML (el script src en html está puesto mucho antes que muchas funciones y no da tiempo a leerlas) sin la function iniciarJuego la maquina lee el html y el js a la par, y queremos que lea primero el HTML y luego el JS. Dentro de esta funcion ponemos todos los elementos HTML que tenemos que llamar 

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
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

    seleccionarMascotaEnemigo()
}

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

    crearMensaje()
}

function crearMensaje() {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Atacaste con' + ataqueJugador + ', tu enemigo atacó con' + ataqueEnemigo + '- pending' 
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)