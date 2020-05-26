let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function ExibeCarro()
{  
  for(let x = 0; x < imgCarros.length; x++)
  { 
    image(imgCarros[x], xCarros[x], yCarros[x], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  
  for(let i = 0; i < imgCarros.length; i++)
  {
    xCarros[i]  -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro()
{
  for(let i = 0; i < imgCarros.length; i++)
  {
    if(xCarros[i] < -50){
      xCarros[i] = 600;
    }
  }
}

