let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
//posicion gato
let gatoX=canvas.width/2;
let gatoY=canvas.height/2;
//posicion comida   
let comidaX =canvas.width-20
let comidaY=canvas.height-20
//gato tamaño
const ANCHO_GATO = 80;
const ALTO_GATO = 50;
const IMAGEN_GATO = new Image();
IMAGEN_GATO.src = "Gato-pensando-Photoroom.png";
//comida tamaño
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;
const IMAGEN_COMIDA = new Image();
IMAGEN_COMIDA.src = "imagen.jpg";
//valores del juego
let puntos = 0;
let tiempoMax = 40;
let tiempo = tiempoMax;
let velocidadTiempo = 1000;  
let intervalo;

function reiniciarJuego(){
    clearInterval(intervalo);
    tiempoMax = 40;
    tiempo = tiempoMax;
    puntos = 0;
    mostrarEnSpan("tiempo", tiempo);
    mostrarEnSpan("puntos", puntos);
    limpiarCanva();
    aparecerComida();
    graficarGato();
    intervalo = setInterval(restarTiempo, velocidadTiempo);
}

function reiniciarTiempo(){
    clearInterval(intervalo);
    tiempoMax = tiempoMax - 1;
    tiempo = tiempoMax;
    mostrarEnSpan("tiempo", tiempo);
    limpiarCanva();
    graficarGato();
    intervalo = setInterval(restarTiempo, velocidadTiempo)
}

function iniciarJuego(){
    intervalo = setInterval(restarTiempo, velocidadTiempo)
    graficarGato();
    aparecerComida();
}

// ❌ ANTES
//function graficarGato(){
//    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#1900ff");
//}
 
// ✅ DESPUÉS
function graficarGato(){
    ctx.drawImage(IMAGEN_GATO, gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}
 
function graficarComida(){
    ctx.drawImage(IMAGEN_COMIDA ,comidaX,comidaY,ANCHO_COMIDA, ALTO_COMIDA,);
}

function moverIzquierda(){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha(){
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}


function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,ancho,alto);
}

function detectarColision(){
    if (comidaX + ANCHO_COMIDA > gatoX && 
        comidaX < gatoX + ANCHO_GATO &&
        comidaY + ALTO_COMIDA > gatoY &&
        comidaY < gatoY + ALTO_GATO){
        
        reiniciarTiempo();
        mostrarEnSpan("tiempo",tiempo);
        puntos = puntos + 1;
        let componente = document.getElementById("puntos");
        componente.textContent = puntos;
        if(puntos == 6){
            clearInterval(intervalo);
            alert("GANASTE");
        };

        aparecerComida();
    }
}

function aparecerComida(){
    comidaX =generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
    graficarComida();   
}

function restarTiempo(){
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);
    if(tiempo <= 0){
        clearInterval(intervalo);
        alert("PERDISTE");
    }
}

//hola