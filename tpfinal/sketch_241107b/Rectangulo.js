class Rectangulo {
  constructor(){
    this.posX = 45;
    this.posY = 50;
    this.miColor = color(0,191,255);
    this.ancho = 50;
    this.alto = 20;
    this.vida;
  }
  
  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, this.ancho, this.alto);
  }
  
  estaVivo() {
  }
  
  
}
