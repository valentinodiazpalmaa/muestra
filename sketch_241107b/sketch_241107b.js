let objJuego; 

function setup() {
  createCanvas(640,440);
  objJuego = new Juego();
}


function draw() {
  objJuego.dibujar();
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
