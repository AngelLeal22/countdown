// Definir la variable en el segundo que debe empezar
let segundoInicio = 60;
let countdownInterval; //es un espacio vacio, para guardar algo que utilizaremos mas tarde



// La función actualizar ahora solo se encarga de mostrar el tiempo y detener el contador cuando llega a 0
function actualizar() {
    document.getElementById("countdown").innerHTML = segundoInicio;
    if (segundoInicio <= 0) {
        clearInterval(countdownInterval);
        // Habilitamos el botón de 'Comenzar' una vez que la cuenta ha terminado
        document.getElementById("btn").disabled = false; 
        document.getElementById("btnP").disabled = true;
        document.getElementById("btnR").disabled = false;
        alert("La cuenta ha terminado");
    } else {
        segundoInicio=segundoInicio-2
    }
}

// Función para iniciar la cuenta regresiva
function iniciarCuentaRegresiva() {
    // Si ya hay un intervalo corriendo, lo detenemos para evitar múltiples contadores
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    // Deshabilitamos el botón de Comenzar para evitar que se reinicie
    document.getElementById("btn").disabled = true; // Deshabilita el botón de Comenzar para evitar que el usuario inicie varios contadores a la vez.
    document.getElementById("btnP").disabled = false;
    document.getElementById("btnR").disabled = false;
    
    // Iniciamos el contador
    countdownInterval = setInterval(actualizar, 1000)
}


// Función para reiniciar el contador a su valor inicial (10 segundos)
function reiniciarCuentaRegresiva() {
    // Detenemos el contador actual
    clearInterval(countdownInterval);
    // Reiniciamos la variable a su valor original
    segundoInicio = 60;
    document.getElementById("countdown").innerHTML = segundoInicio;//  Actualiza la pantalla para que el usuario vea el 10 de inmediato.
    // Habilitamos el boton de Comenzar y deshabilitamos Pausar
    document.getElementById("btn").disabled = false;
    document.getElementById("btnP").disabled = true;
    document.getElementById("btnR").disabled = true;

}


// Función para pausar la cuenta regresiva
function pausarCuentaRegresiva() {
    // Detenemos el contador
    clearInterval(countdownInterval);
    // Habilitamos el botón de Comenzar para poder reanudar
    document.getElementById("btn").disabled = false;
    document.getElementById("btnP").disabled = true;
    document.getElementById("btnR").disabled = false;
    
}


// Asignar los eventos de click a cada botón de forma individual
//Estas tres lineas son los oyentes de eventos Le dicen al navegador: Cuando el usuario haga clic en este boton ejecuta esta función
document.getElementById("btn").addEventListener("click", iniciarCuentaRegresiva);
document.getElementById("btnP").addEventListener("click", pausarCuentaRegresiva);
document.getElementById("btnR").addEventListener("click", reiniciarCuentaRegresiva);



// Estado inicial de los botones y el contador al cargar la página

window.onload = function() {

    // Mostramos el valor inicial de la cuenta
    document.getElementById("countdown").innerHTML = segundoInicio;
    // Deshabilitamos los botones de Pausar y Reiniciar al inicio
    document.getElementById("btnP").disabled = true;
    document.getElementById("btnR").disabled = true;
}