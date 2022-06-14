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

// // Desafio 11
// function generatePhoneNumber(numbers) {
//   let telefone = [];
//   let numCompleto;
//   for (let i = 0; i < numbers.length; i++) {
//     telefone[i] = numbers[i];
//     if (telefone[i] < 0) {
//       return "não é possível gerar um número de telefone com esses valores";
//     }else if (telefone[i] > 9){
//       return "não é possível gerar um número de telefone com esses valores";
//     }else if (telefone[i] == telefone[i] && telefone[i] == telefone[i] && telefone[i] == telefone[i] ){
//       return "não é possível gerar um número de telefone com esses valores";
//     }else if (telefone !== 11) {
//     return "Array com tamanho incorreto.";
//     }
//   }
//   numCompleto = ("(" + telefone[0] telefone[0]+ ")" telefone[0] telefone[0] telefone[0] telefone[0] telefone[0]
//   return numCompleto;
// }

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
  // generatePhoneNumber,
  techList,
  // hydrate,
  // triangleCheck,
};
