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
function generatePhoneNumber(numbers) {
  let telefone = [];
  let numCompleto;
  for (let index = 0; index < numbers.length; index++) {
    telefone[index] = numbers[index];
    if (telefone[index] < 0) {
      return "não é possível gerar um número de telefone com esses valores";
    }else if (telefone[index] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }else if (telefone[index] == telefone[index] && telefone[index] == telefone[index] && telefone[index] == telefone[index] ){
      return "não é possível gerar um número de telefone com esses valores";
    }else if (telefone !== 11) {
    return "Array com tamanho incorreto.";
    } 
  }
  numCompleto = ("(" + telefone[0] telefone[0]+ ")" telefone[0] telefone[0] telefone[0] telefone[0] telefone[0]
  return numCompleto;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(comanda) {
  comanda.replace(/\D/g, '');
  console.log(comanda);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
