//Valentino Diaz Palma
//Luka Clausel

let objJuego; 

function setup() {
  createCanvas(640,440);
  objJuego = new Juego(10,3);
}


function draw() {
  background(255);
  
  objJuego.dibujar();
  
   if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      objJuego.barra.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      objJuego.barra.moverDerecha();
    }
  }
  
  push()
  fill(0, 0, 0);
  rect(0, 0, width, 10);
  rect(0,0,10,height)
  rect(620,10,height)
  pop()
  
  push()
  fill(255,0,0);
  rect(0,430,width, 10);  
  pop()
}
