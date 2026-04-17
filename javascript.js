// 1. VARIABLES GLOBALES (Memoria del juego)
let nombreDelJugador = "";
let personajeElegido = "";

// 2. CAPTURAR ELEMENTOS (Referencias al HTML)
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaSeleccion = document.getElementById('pantalla-seleccion');
const pantallaBatalla = document.getElementById('pantalla-batalla');
const inputNombre = document.getElementById('input-nombre');
const botonEntrar = document.getElementById('btn-entrar');

// 3. FUNCIÓN: ENTRAR AL JUEGO
botonEntrar.addEventListener('click', function() {
    const nombreValido = inputNombre.value;

    if(nombreValido === "") {
        alert("¡Alto ahí, Viajero! Debes decirnos tu nombre.");
    } else {
        nombreDelJugador = nombreValido;
        console.log("Jugador: " + nombreDelJugador);
        
        // Cambio de pantallas
        pantallaInicio.style.display = "none";
        pantallaSeleccion.style.display = "block";
    }
});

// 4. FUNCIÓN: SELECCIONAR CAMPEÓN
function seleccionarPersonaje(nombreHeroe) {
    personajeElegido = nombreHeroe;
    alert("Has elegido al valiente " + personajeElegido);
    
    // Avanzar a la batalla
    pantallaSeleccion.style.display = "none";
    pantallaBatalla.style.display = "block";
    
    // Aquí iniciaremos la lógica del combate en la siguiente clase
    console.log("Iniciando combate de " + personajeElegido + " para " + nombreDelJugador);
}