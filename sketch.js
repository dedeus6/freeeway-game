function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificarColisao();
  mostraPontos();
  marcaPontos();
}
