//1 variables
let nombreDelJugador = "";
let personajeElegido = "";
let vidasJugador = 3;
let vidasEnemigo = 3;

//2. pantalla de seleccion

const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaSeleccion = document.getElementById('pantalla-seleccion');
const pantallaBatalla= document.getElementById('pantalla-batalla');
const inputNombre = document.getElementById('input-nombre')

//3 pasar de inicio a seleccion 

document.getElementById('btn-entrar').addEventListener('click', function() {
    if(inputNombre.value === "") {
        alert ("!Escribe tu nombre Guerrero¡");

    } else{
        nombreDelJugador = inputNombre.value;
        pantallaInicio.style.display = "none";
        pantallaSeleccion.style.display = "block";
    }
});


//4. pasar de seleccion de personaje a la batalla 

function seleccionarPersonaje(clase) {
    personajeElegido = clase
    document.getElementById('nombre-jugador-batalla').innerText = nombreDelJugador + " (" + clase + ") ";

    pantallaSeleccion.style.display = "none";
    pantallaBatalla.style.display = "block";
}

//5.  logica de la batalla 

function combatir(armaJugador) {
    const opciones = ['Espada', 'Acha', 'Lanza' ];
    const armaMaquina = opciones[Math.floor(Math.random() *3)];
    const mensaje = document.getElementById('mensaje-batalla');
    const mensajeM = document.getElementById('mensaje-eleccion')
    const mensajeJ = document.getElementById('mensaje-')

// resultado de la batalla
if (armaJugador === armaMaquina) {
    mensaje.innerText = "!Empate¡ ambos usaron " + armaJugador;
}
else if (
    (armaJugador === 'Espada' && armaMaquina === 'Acha')||
    (armaJugador === 'Acha' && armaMaquina === 'Lanza')||
    (armaJugador === 'Lanza' && armaMaquina === 'Espada')
){
    vidasEnemigo--;
    document.getElementById('vidas-jugador').innerText = vidasEnemigo;
    mensaje.innerText = "¡Punto para ti! " + armaJugador + " venca a " + armaMaquina;

}
else{
    vidasJugador--;
    document.getElementById('vidas-jugador').innen = vidasJugador;
    mensaje.innerText = "¡Punto para la maquina! " + armaMaquina + " vence a " + armaJugador;
    
}
revisarGanador()
}

function revisarGanador() {
    if (vidasEnemigo <= 0){
        alert("¡Felicidades " + nombreDelJugador + "¡ Has ganado el combate.");
        location.reload();
    }
    else if (vidasJugador <= 0) {
        alert("¡Has sido derrotado... el reino ha Caido.");
        location.reload();
    }
}