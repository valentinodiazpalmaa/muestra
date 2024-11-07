class Juego{
  constructor(){
    this.crearRectangulos();
    this.crearBarra();
    this.crearBola();      
    }
  }
  
  dibujar(){
    this.barra.dibujar();
    
    for (let i=0; i<10;i++){
      this.rectangulo[i].dibujar();
  }
  
  iniciar(){
  }
  
  crearRectangulos(){
    this.rectangulo = [];
    for (let i=0; i<10;i++){
      this.rectangulo[i] = new Rectangulo();
  }
  
  crearBarra(){
    this.barra = new Barra();
  }
  
  crearBola(){
    this.bola = new Bola();
  }
  
  gano(){
  }
  
  

}
