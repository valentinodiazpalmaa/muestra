let objJuego; 

function setup() {
  createCanvas(640,440);
  objJuego = new Juego();
}


function draw() {
  objJuego.dibujar();
}
