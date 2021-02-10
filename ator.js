//variaveis do ator
let xAtor = 100;
let yAtor = 366;
let lAtor = 30;
let aAtor = 30;

let colidiu = false;

let meusPontos = 0;

function mostraAtor(){
  image(imgAtor, xAtor, yAtor, lAtor, aAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
  
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 2;
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 2;
  }
}

function verificarColisao(){
  for (let i=0; i < imagemCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], lCarros, aCarros, xAtor, yAtor, 15);
    if (colidiu){       
        meusPontos = 0;
        colisao.play();
        voltaAtorInicio();

    }
  }
}

function voltaAtorInicio(){
  yAtor = 366;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, 480, 27);
}

function marcaPontos(){
  if (yAtor < -10){
    meusPontos += 1;
    pontos.play();
    voltaAtorInicio();
  }
}