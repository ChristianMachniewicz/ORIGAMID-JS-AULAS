// Crie um objeto com os seus dados pessoais V
// Deve possuir pelo menos duas propriedades nome e sobrenome V

var christian = {
  nome: "Christian",
  sobrenome: "machniewicz",
  idade: 21,
  altura: 1.85,
  nacionalidade: "Curitiba",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
christian.digaMeuNome = function () {
  return console.log(`Meu nome completo e ${this.nome} ${this.sobrenome} `);
};
christian.digaMeuNome();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Reunalt",
};
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  idade: " 10 anos",
  latir(pessoa) {
    if (pessoa == "homem") {
      return console.log("ouf ouf ouf");
    } else {
      return console.log("Tudo na paz ");
    }
  },
};
