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

// // Desafio 12
// function triangleCheck() {
//   // seu código aqui
// }

// // Desafio 13
// function hydrate(comanda) {
//   comanda.replace(/\D/g, '');
//   console.log(comanda);
// }

module.exports = {
  generatePhoneNumber,
  techList,
  // hydrate,
  // triangleCheck,
};
