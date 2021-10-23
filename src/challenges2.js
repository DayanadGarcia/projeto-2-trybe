// Desafio 10
function techList(tech, name) {
  let arrObjetos = [];
  for (let index = 0; index < tech.length; index++) {
    arrObjetos[index] = {
      tech: tech.sort()[index],
      name: name
    }     
  }
  if (arrObjetos.length == 0) {
    return 'Vazio!';
  }
  return arrObjetos;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
