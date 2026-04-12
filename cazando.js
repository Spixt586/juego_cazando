let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
//posicion gato
let gatoX=canvas.width/2;
let gatoY=canvas.height/2;
//posicion comida   
let comidaX =canvas.width-20
let comidaY=canvas.height-20
//gato tamaño
const anchoGato = 80;
const altoGato = 50;
//comida tamaño
const altoComida = 20;
const anchoComida = 20;  

function iniciarJuego(){
    graficarGato();
    graficarComida();
}
 
function graficarGato(){
    graficarRectangulo(gatoX, gatoY, anchoGato,altoGato, "#1900ff");
}
 
function graficarComida(){
    graficarRectangulo(comidaX,comidaY,anchoComida, altoComida, "#FF0808");
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

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
