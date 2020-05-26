//PLAYER
let yInicial = 366;
let xPlayer = 85;
let yPlayer = yInicial;
let hit = false;
let pontos = 0;

function ExibeAtor()
{
  image(imgPersonagem, xPlayer, yPlayer, 30,30);
}

function movimentaPlayer(){
  if (keyIsDown(UP_ARROW)){
    yPlayer -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(validaAltura())
    {
      yPlayer += 3;
    }
  }
}

function verificaColizacao()
{
  for(let i = 0; i < imgCarros.length; i++)
  {
    hit = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPlayer, yPlayer, 15);
    
    if(hit)
    {
      somColisao.play();
      voltarPosicaoInicial();
      if(meusPontos())
      {
        pontos--;
      }
    }
  }
}

function voltarPosicaoInicial()
{
  yPlayer = yInicial;
}

function incluiPontos()
{
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(pontos, width/5, 27);
}

function MarcaPonto()
{
  if(yPlayer < 15)
  {
    pontos++;
    voltarPosicaoInicial();
    somPonto.play();
  }
}

function pontuacao()
{
  return pontos < 0;
}

function validaAltura()
{
  return yPlayer < yInicial;
}