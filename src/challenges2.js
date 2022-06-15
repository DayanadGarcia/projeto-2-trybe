// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) return ('Vazio!');

  const myObj = tech.map((techs) => ({ tech: techs, name }));
  myObj.sort((a, b) => {
    if (a.tech < b.tech) return -1;
    return true;
  });
  return myObj;
}

function lengthNumber(num) { // faz parte do desafio 11
  let dif = false;
  if (num.length !== 11) dif = true;
  return dif;
}

function moreThanLessThan(num) { // faz parte do desafio 11
  let moreLess = false;
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] < 0 || num[i] > 9) moreLess = true;
  }
  return moreLess;
}

function repeatedNumbers(num, arr) { // faz parte do desafio 11
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) count += 1;
  }
  if (count >= 3) return true;
  return false;
}

function itemOfArray(array) { // faz parte do desafio 11
  for (const n of array) {
    if (repeatedNumbers(n, array)) {
      return true;
    }
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (lengthNumber(numbers) === true) {
    return 'Array com tamanho incorreto.';
  }
  if (moreThanLessThan(numbers) === true || itemOfArray(numbers) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let mask = '(xx) xxxxx-xxxx';
  numbers.forEach((num) => {
    mask = mask.replace('x', num);
  });
  return mask;
}

// Desafio 12
function triangleCheck(l1, l2, l3) {
  const sub = [l1 - l2, l1 - l3, l2 - l3];
  const sum = [l1 + l2, l1 + l3, l2 + l3];
  if (l1 < sum[2] && l1 > Math.abs(sub[2])
    || l2 < sum[1] && l2 > Math.abs(sub[1])
    || l3 < sum[0] && l3 > Math.abs(sub[0])) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(comanda) {
  let regex = /\d+/g;
  let matches = comanda.match(regex); // creates array from matches
  let arrNum = matches.toString().split(',').map((item) => parseInt(item, 10));
  let water = arrNum.reduce((prevNum, currNum) => prevNum + currNum, 0);
  if (water > 1) return `${water} copos de água`;
  return `${water} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
