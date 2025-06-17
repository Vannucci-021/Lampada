const lampada = document.getElementById("lampada");
let estaQuebrada = false;

function Ligar() {
  if (estaQuebrada) return;  // se estiver quebrada, não liga
  lampada.src = './assets/lampada-acesa.svg';  // liga a lâmpada
}

function Desligar() {
  if (estaQuebrada) return;  // se estiver quebrada, não desliga
  lampada.src = './assets/lampada-apagada.svg';  // apaga a lâmpada
}

function Quebrar() {
  lampada.src = './assets/lampada-quebrada.svg';  // muda para lâmpada quebrada
  estaQuebrada = true;  // avisa que a lâmpada quebrou
}

lampada.addEventListener('click', Quebrar);  // clique quebra a lâmpada
