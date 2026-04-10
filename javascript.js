// 1. CAPTURAR LOS ELEMENTOS
//USAMOS document.getElementByid para traer los "huesos del HTML al "cerebro"

const botonEntrar = document.getElementById('btn-entrar');
const inputNombre = document.getElementById('input-nombre');

// 2.escuchar el clic
// le decimos al boton: "Quedate atento a cuando alguien te haga clic".
botonEntrar.addEventListener('click', function() {
        
// 3. OBTENER EL VALOR 
// Guardamos lo que el usuario escribio en una caja llamada 'nombreUsuario'
const nombreUsuario = inputNombre.value;

// 4. VALIDACION (Logica de seguridad)
// si el nombre esta vacio, lanzamos una alarta medieval.

if(nombreUsuario === "") {
    alert("!Alto ahi, Viajero! Debes decirnos tu nombre antes de cruzar la puerta");

}
else {
    //si hay nombre, le damos la bienvenida
    console.log("Bienvenido al reino, " + nombreUsuario);
    alert("!Bienvenido, " + nombreUsuario + "!Los guerreros te estaban esperando.");

}
})