// Desafio 1
function compareTrue(valor1, valor2) {
  let compare = false;
  if (valor1 == true && valor2 == true) {
    compare = true;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(arrStr) {
  let frase = arrStr.split(' ');
  return frase;
}

// Desafio 4
function concatName(arrString) {
  let last = arrString[arrString.length - 1];
  let first = arrString[0];
  return (last, first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let cont = wins * 3;
  let points = cont + ties;
  return points;
}

// Desafio 6

function highestCount() {
  ///
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let msg;
  if (cat1 > cat2) {
    msg = console.log('cat1');
  } else if (cat1 == cat2) {
    msg = console.log('os gatos trombam e o rato foge');
  } else {
    msg = console.log('cat2');
  }
  return msg;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
