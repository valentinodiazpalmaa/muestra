class Bola {
  constructor() {
    this.posX = 200;
    this.posY = 340;
    this.velocidadX = random(2, 5) * (random() > 0.5 ? 1 : -1);
    this.velocidadY = -3;
    this.miColor = color(255, 0, 0);
    this.ancho = 20;
    this.alto = 20;
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, this.ancho, this.alto);
  }

  mover() {
  this.posX += this.velocidadX;  
  this.posY += this.velocidadY;  

  // Rebote en las paredes laterales
  if (this.posX < this.ancho / 2 || this.posX > width - this.ancho / 2) {
    this.velocidadX *= -1;  // Invierte la dirección en X
  }

  // Rebote en el techo
  if (this.posY < this.alto / 2) {
    this.velocidadY *= -1;  // Invierte la dirección en Y si rebota en el techo
  }

  // Revisión de la colisión con la barra
  if (this.posY + this.alto / 2 >= objJuego.barra.posY && 
      this.posY + this.alto / 2 <= objJuego.barra.posY + objJuego.barra.alto &&
      this.posX + this.ancho / 2 >= objJuego.barra.posX && 
      this.posX - this.ancho / 2 <= objJuego.barra.posX + objJuego.barra.ancho) {
    this.velocidadY *= -1; 
  }

  // Rebote en el fondo
  if (this.posY > height - this.alto / 2) {
    this.posY = height - this.alto / 2;  // Evita que la bola pase del borde inferior
    this.velocidadY *= -1;  // Rebote
  }

  // Colisión con los rectángulos
  for (let i = 0; i < objJuego.rectangulo.length; i++) {
    if (objJuego.rectangulo[i].vida &&
        this.posX > objJuego.rectangulo[i].posX &&
        this.posX < objJuego.rectangulo[i].posX + objJuego.rectangulo[i].ancho &&
        this.posY > objJuego.rectangulo[i].posY &&
        this.posY < objJuego.rectangulo[i].posY + objJuego.rectangulo[i].alto) {
      objJuego.rectangulo[i].vida = false;  // "Rompe" el rectángulo
      this.velocidadY *= -1;  // Rebota al cambiar la dirección en Y
    }
  }
  }
}
