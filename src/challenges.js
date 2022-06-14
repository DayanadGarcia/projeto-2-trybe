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
  let cont = wins * 3;
  let points = cont + ties;
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let highestNumber = numeros[0];
  let vezes = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > highestNumber) {
      highestNumber = numeros[i];
    }
  }
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (highestNumber == numeros[cont]) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let msg;
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
  } else {
    msg = 'os gatos trombam e o rato foge';
  }
  return msg;
}

// Desafio 8
function fizzBuzz(numeros) {
  let arrResultado = [];
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 3 == 0) {
      arrResultado[index] = 'fizz';
    }
    if (numeros[index] % 5 == 0) {
      arrResultado[index] = 'buzz';
    }
    if (numeros[index] % 3 == 0 && numeros[index] % 5 == 0) {
      arrResultado[index] = 'fizzBuzz';
    }
    if (numeros[index] % 3 != 0 && numeros[index] % 5 != 0) {
      arrResultado[index] = 'bug!';
    }
  }
  return arrResultado;
}

// Desafio 9
function encode(palavras) {
  let palavraSplit = palavras.split('');
  for (let index = 0; index < palavraSplit.length; index++) {
    if (palavraSplit[index] == 'a') {
      palavraSplit[index] = 1;
    } else if (palavraSplit[index] == 'e') {
      palavraSplit[index] = 2;
    } else if (palavraSplit[index] == 'i') {
      palavraSplit[index] = 3;
    } else if (palavraSplit[index] == 'o') {
      palavraSplit[index] = 4;
    } else if (palavraSplit[index] == 'u') {
      palavraSplit[index] = 5;
    }
  }
  return (palavraSplit.join(''));
}

function decode(codigo) {
  let codigoSplit = codigo.split('');
  for (let index = 0; index < codigoSplit.length; index++) {
    if (codigoSplit[index] == 1) {
      codigoSplit[index] = 'a';
    } else if (codigoSplit[index] == 2) {
      codigoSplit[index] = 'e';
    } else if (codigoSplit[index] == 3) {
      codigoSplit[index] = 'i';
    } else if (codigoSplit[index] == 4) {
      codigoSplit[index] = 'o';
    } else if (codigoSplit[index] == 5) {
      codigoSplit[index] = 'u';
    }
  }
  return (codigoSplit.join(''));
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
