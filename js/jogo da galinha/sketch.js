
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  ExibeAtor();
  ExibeCarro();
  movimentaCarro();
  movimentaPlayer();
  verificaColizacao();
  incluiPontos();
  MarcaPonto();
}


