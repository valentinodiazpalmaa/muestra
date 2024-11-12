class Bola {
  constructor(){
    this.posX = 300;
    this.posY = 440;
    this.miColor = color(255,0,0);
    this.ancho = 20;
    this.alto = 20;
  }
  
    
  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, this.ancho, this.alto);
  }
  
  mover() {
  }
  
  
  
}
