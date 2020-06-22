let background_image;
let personagem_image;
let personagem_height = 135;
let cenario;
let musica;
let personagem;


function preload(){ //Faz um preload dos arquivos antes de executar
  background_image = loadImage('imagens/cenario/floresta.png');
  personagem_image = loadImage('imagens/personagem/correndo.png');
  musica = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Scene(background_image, 3);
  frameRate(12); //Definição de fps
  personagem = new Personagem(personagem_image);
  musica.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}

