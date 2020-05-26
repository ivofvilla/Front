let imgPersonagem;
let imgEstrada;
let imgCarro;
let imgCarro2;
let imgCarro3;
let imgCarros = [];

let somTrilha;
let somColisao
let somPonto;

function preload()
{
  imgEstrada = loadImage('imagens/estrada.png');
  imgPersonagem = loadImage('imagens/ator-1.png');
  imgCarro = loadImage('imagens/carro-1.png');
  imgCarro2 = loadImage('imagens/carro-2.png');  
  imgCarro3 = loadImage('imagens/carro-3.png');
  
  imgCarros = [imgCarro,imgCarro2,imgCarro3, imgCarro,imgCarro2,imgCarro3];
  
  somTrilha = loadSound('sons/trilha.mp3');
  somColisao = loadSound('sons/colidiu.mp3');
  somPonto = loadSound('sons/pontos.wav');
  
  
  
}
