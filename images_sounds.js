let imgEstrada;
let imgAtor;
let imgCarro;
let imgCarro2;
let imgCarro3;

//variaveis do som
let trilha;
let colisao;
let pontos;

function preload(){
  imgEstrada = loadImage("imgs/estrada.png");
  imgAtor = loadImage("imgs/ator-1.png");
  imgCarro = loadImage("imgs/carro-1.png");
  imgCarro2 = loadImage("imgs/carro-2.png");
  imgCarro3 = loadImage("imgs/carro-3.png");
  imagemCarros = [imgCarro, imgCarro2, imgCarro3, imgCarro, imgCarro2, imgCarro3];
  
  //sons
  trilha = loadSound("sounds/trilha.mp3");
  colisao = loadSound("sounds/colidiu.mp3");
  pontos = loadSound("sounds/pontos.wav");
}