class Scene{ //Objeto cenário
   constructor(imagem, velocidade){ //Constructor -> Contem as informações necessárias para a criação do cenário
     this.imagem = imagem; //This -> referenciamento ao objeto
     this.velocidade = velocidade;
     this.x1 = 0;
     this.x2 = width;
   }
  
  exibe(){
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }
  
  move(){ //Função para mover o cenário
    this.x1 = this.x1 - this.velocidade; //Movimentação da imagem 1
    this.x2 = this.x2 - this.velocidade; //Movimentação da imagem 2
    
    if(this.x1 < -width){ //Se a imagem "passar completamente", é mandada  ao início
      this.x1 = width;
    }
    
    if(this.x2 < -width){
      this.x2 = width;
    }
  }
}