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
//comida tamaño
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;  

function iniciarJuego(){
    graficarGato();
    graficarComida();
}
 
function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO,ALTO_GATO, "#1900ff");
}
 
function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA, ALTO_COMIDA, "#FF0808");
}

function moverIzquierda(){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverDerecha(){
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverArriba(){
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverAbajo(){
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}


function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,ancho,alto)
}

function detectarColision(){
    if(ANCHO_GATO == comidaX && ANCHO_GATO == comidaY){
        alert("colision")
    }
}