// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(arrStr) {
  return arrStr.split(' ');
}

// Desafio 4
function concatName(arrString) {
  let last = arrString[arrString.length - 1];
  let first = arrString[0];
  return (`${last}, ${first}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numeros) {
  const highest = Math.max(...numeros);
  let vezes = 0;
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (highest === numeros[cont]) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let msg = 'os gatos trombam e o rato foge';
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;

  if (distCat1 < 0) {
    distCat1 *= (-1);
  } else if (distCat2 < 0) {
    distCat2 *= (-1);
  }
  if (distCat1 > distCat2) {
    msg = 'cat2';
  } else if (distCat2 > distCat1) {
    msg = 'cat1';
  }
  return msg;
}

// Desafio 8
function fizzBuzz(numeros) {
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) numeros[i] = 'fizzBuzz';
    else if (numeros[i] % 3 === 0) numeros[i] = 'fizz';
    else if (numeros[i] % 5 === 0) numeros[i] = 'buzz';
    else numeros[i] = 'bug!';
  }
  return numeros;
}

// Desafio 9
function encode(palavras) {
  let palavraSplit = palavras.split(''); // array de strings
  for (let i = 0; i < palavraSplit.length; i += 1) {
    if (palavraSplit[i] === 'a') palavraSplit[i] = 1;
    else if (palavraSplit[i] === 'e') palavraSplit[i] = 2;
    else if (palavraSplit[i] === 'i') palavraSplit[i] = 3;
    else if (palavraSplit[i] === 'o') palavraSplit[i] = 4;
    else if (palavraSplit[i] === 'u') palavraSplit[i] = 5;
  }
  return palavraSplit.join('');
}

function decode(codigo) {
  let codigoSplit = codigo.split('');
  for (let i = 0; i < codigoSplit.length; i += 1) {
    if (codigoSplit[i] === '1') codigoSplit[i] = 'a';
    else if (codigoSplit[i] === '2') codigoSplit[i] = 'e';
    else if (codigoSplit[i] === '3') codigoSplit[i] = 'i';
    else if (codigoSplit[i] === '4') codigoSplit[i] = 'o';
    else if (codigoSplit[i] === '5') codigoSplit[i] = 'u';
  }
  return codigoSplit.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  encode,
  decode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
