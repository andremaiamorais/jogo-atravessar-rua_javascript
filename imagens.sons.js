// imagens do jogo

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// sons do jogo
let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imagemEstrada = loadImage("estrada.png");
  imagemAtor = loadImage("ator-1.png");
  imagemCarro = loadImage("carro-1.png");
  imagemCarro2 = loadImage("carro-2.png");
  imagemCarro3 = loadImage("carro-3.png");
  
  somTrilha = loadSound("trilha.mp3");
  somPonto = loadSound("pontos.wav");
  somColisao = loadSound("colidiu.mp3");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
}
