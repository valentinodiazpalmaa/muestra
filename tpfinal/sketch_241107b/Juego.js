class Juego {
constructor(cantidadRectangulos, cantidadFilas) {
    this.cantidadRectangulos = cantidadRectangulos;
    this.cantidadFilas = cantidadFilas;
    this.crearRectangulos();
    this.barra = new Barra();
    this.bola = new Bola();
  }

  dibujar() {
    this.barra.dibujar();
    this.bola.dibujar();
    this.bola.mover();
    for (let j = 0; j < this.rectangulo.length; j++) {
      this.rectangulo[j].dibujar();
    }
  }

crearRectangulos() {
  this.rectangulo = []; 
  for (let i = 0; i < this.cantidadFilas; i++) { 
    for (let j = 0; j < this.cantidadRectangulos; j++) { 
      let posX = j * 60; 
      let posY = i * 45 + 50; 
      this.rectangulo.push(new Rectangulo(posX, posY)); 
    }
  }
}


  teclaPresionada(keyCode) {
    this.barra.teclaPresionada(keyCode);
  }
}

  
