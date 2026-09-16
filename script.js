```javascript
// ========================================
// TECH CHALLENGE
// Juego de tecnología
// Proyecto de estudiantes de 6°, 7° y 9°
// ========================================


// PREGUNTAS

const preguntas = [

    {
        pregunta: "¿Cuál de estos es un sistema operativo?",
        respuestas: [
            "Windows",
            "Google Chrome",
            "YouTube",
            "WhatsApp"
        ],
        correcta: 0,
        icono: "💻"
    },

    {
        pregunta: "¿Para qué sirve principalmente un navegador web?",
        respuestas: [
            "Para cocinar",
            "Para entrar y navegar por páginas de Internet",
            "Para cargar la batería",
            "Para limpiar el teclado"
        ],
        correcta: 1,
        icono: "🌐"
    },

    {
        pregunta: "¿Cuál de estos es un lenguaje de programación?",
        respuestas: [
            "JavaScript",
            "Windows",
            "Google",
            "Bluetooth"
        ],
        correcta: 0,
        icono: "👨‍💻"
    },

    {
        pregunta: "¿Qué componente se encarga principalmente de procesar las instrucciones?",
        respuestas: [
            "Mouse",
            "Monitor",
            "CPU",
            "Parlantes"
        ],
        correcta: 2,
        icono: "⚙️"
    },

    {
        pregunta: "¿Qué significa HTML?",
        respuestas: [
            "HyperText Markup Language",
            "High Technology Machine Language",
            "Home Tool Machine Language",
            "Hyper Transfer Modern Link"
        ],
        correcta: 0,
        icono: "📄"
    },

    {
        pregunta: "¿Cuál de estos sirve para almacenar archivos?",
        respuestas: [
            "Disco duro",
            "Monitor",
            "Teclado",
            "Micrófono"
        ],
        correcta: 0,
        icono: "💾"
    },

    {
        pregunta: "¿Qué significa Wi-Fi?",
        respuestas: [
            "Una conexión inalámbrica a una red",
            "Un tipo de teclado",
            "Un videojuego",
            "Un sistema operativo"
        ],
        correcta: 0,
        icono: "📶"
    },

    {
        pregunta: "¿Cuál es una contraseña más segura?",
        respuestas: [
            "123456",
            "password",
            "Juan2000",
            "T9!kP#42z"
        ],
        correcta: 3,
        icono: "🔐"
    },

    {
        pregunta: "¿Qué programa se utiliza normalmente para crear páginas web?",
        respuestas: [
            "Un editor de código",
            "Una calculadora",
            "Una cámara",
            "Un reproductor de música"
        ],
        correcta: 0,
        icono: "🖥️"
    },

    {
        pregunta: "¿Qué hace un antivirus?",
        respuestas: [
            "Aumenta el volumen",
            "Ayuda a detectar y proteger contra software malicioso",
            "Cambia el teclado",
            "Crea fotografías"
        ],
        correcta: 1,
        icono: "🛡️"
    },

    {
        pregunta: "¿Qué dispositivo utilizamos normalmente para mover el cursor?",
        respuestas: [
            "Mouse",
            "Router",
            "Impresora",
            "Memoria USB"
        ],
        correcta: 0,
        icono: "🖱️"
    },

    {
        pregunta: "¿Qué es JavaScript?",
        respuestas: [
            "Un lenguaje de programación",
            "Una computadora",
            "Un cable",
            "Un navegador"
        ],
        correcta: 0,
        icono: "⚡"
    }

];


// VARIABLES DEL JUEGO

let preguntaActual = 0;
let puntos = 0;
let vidas = 3;
let respondiendo = false;


// ELEMENTOS HTML

const pantallaInicio = document.getElementById("inicio");
const pantallaJuego = document.getElementById("juego");
const pantallaFinal = document.getElementById("final");

const vidasTexto = document.getElementById("vidas");
const puntosTexto = document.getElementById("puntos");

const preguntaTexto = document.getElementById("pregunta");
const numeroPregunta = document.getElementById("numeroPregunta");
const iconoPregunta = document.getElementById("iconoPregunta");

const botones = document.querySelectorAll(".respuestas button");

const mensaje = document.getElementById("mensaje");


// ========================================
// INICIAR JUEGO
// ========================================

function iniciarJuego() {

    preguntaActual = 0;
    puntos = 0;
    vidas = 3;

    pantallaInicio.classList.add("oculto");
    pantallaFinal.classList.add("oculto");
    pantallaJuego.classList.remove("oculto");

    actualizarDatos();
    mostrarPregunta();
}


// ========================================
// MOSTRAR PREGUNTA
// ========================================

function mostrarPregunta() {

    respondiendo = true;

    const pregunta = preguntas[preguntaActual];

    preguntaTexto.textContent = pregunta.pregunta;

    numeroPregunta.textContent = preguntaActual + 1;

    iconoPregunta.textContent = pregunta.icono;

    mensaje.textContent = "";

    botones.forEach((boton, indice) => {

        boton.textContent = pregunta.respuestas[indice];

        boton.classList.remove("correcta");
        boton.classList.remove("incorrecta");

        boton.disabled = false;

    });
}


// ========================================
// RESPONDER
// ========================================

function responder(opcion) {

    if (!respondiendo) {
        return;
    }

    respondiendo = false;

    const pregunta = preguntas[preguntaActual];

    botones.forEach(boton => {
        boton.disabled = true;
    });


    // RESPUESTA CORRECTA

    if (opcion === pregunta.correcta) {

        puntos += 10;

        botones[opcion].classList.add("correcta");

        mensaje.textContent = "✅ ¡Correcto! +10 puntos";

        mensaje.style.color = "#47e69a";

    }

    // RESPUESTA INCORRECTA

    else {

        vidas--;

        botones[opcion].classList.add("incorrecta");

        botones[pregunta.correcta].classList.add("correcta");

        mensaje.textContent = "❌ Incorrecto. Perdiste una vida.";

        mensaje.style.color = "#ff7373";

    }


    actualizarDatos();


    // Esperar antes de pasar a la siguiente

    setTimeout(() => {

        if (vidas <= 0) {

            terminarJuego();

        }

        else if (preguntaActual < preguntas.length - 1) {

            preguntaActual++;

            mostrarPregunta();

        }

        else {

            terminarJuego();

        }

    }, 1300);
}


// ========================================
// ACTUALIZAR DATOS
// ========================================

function actualizarDatos() {

    vidasTexto.textContent = vidas;

    puntosTexto.textContent = puntos;

}


// ========================================
// TERMINAR JUEGO
// ========================================

function terminarJuego() {

    pantallaJuego.classList.add("oculto");

    pantallaFinal.classList.remove("oculto");

    document.getElementById("puntuacionFinal").textContent =
        puntos + " puntos";


    const mensajeFinal = document.getElementById("mensajeFinal");


    if (puntos >= 100) {

        mensajeFinal.textContent =
            "🔥 ¡Excelente! Sabes mucho de tecnología.";

    }

    else if (puntos >= 60) {

        mensajeFinal.textContent =
            "😎 ¡Muy bien! Tienes buenos conocimientos.";

    }

    else if (puntos >= 30) {

        mensajeFinal.textContent =
            "👍 ¡Buen trabajo! Sigue aprendiendo.";

    }

    else {

        mensajeFinal.textContent =
            "💡 Sigue practicando. ¡La tecnología se aprende jugando!";

    }
}


// ========================================
// VOLVER A JUGAR
// ========================================

function volverAJugar() {

    iniciarJuego();

}
```
