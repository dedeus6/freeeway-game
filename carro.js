let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let vCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let lCarros = 50;
let aCarros = 40;

function mostraCarro(){
  for (let i=0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], lCarros, aCarros);
  }
    
}

function movimentaCarro(){
  for (let i=0; i< xCarros.length; i++){
      xCarros[i] -= vCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for (let i=0; i< xCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}