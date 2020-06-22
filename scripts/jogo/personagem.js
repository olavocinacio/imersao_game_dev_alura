class Personagem{
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = [];
    for(let i = 0; i < 4; i++){
      for(let j = 0; j <4; j++){
        this.matriz.push([i * 220, j * 270]);
      }
    }
    this.frame_atual = 0;
  }
  
  exibe(){
    image(this.imagem, 0, height - personagem_height, 110, personagem_height,
    this.matriz[this.frame_atual][0], 
    this.matriz[this.frame_atual][1], 220, 270);
  // (x, y, width, height, relative_x, relative_y, relative_width, relative_height)
  // 1.(0,height - 135,220,270) -> Em relação ao canvas
  // 2.(0,0,110,135)-> Em relação à própria imagem (cortando um único personagem da imagem com vários)
    this.anima();
  }
  
    anima(){
      this.frame_atual++;
      
      if(this.frame_atual >= this.matriz.length - 1){
        this.frame_atual = 0;
      }
    }
  
}