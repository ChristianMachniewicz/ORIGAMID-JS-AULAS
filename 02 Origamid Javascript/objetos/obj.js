var pessoa = {
  nome: "Christian",
  idade: 21,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#111",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";

menu.esconder = function () {
  console.log("Escondi");
};
var bg = menu.backgroundColor;

//   ------------------------------------------------- \\

pessoa.nome.length; // 9
pessoa.nome.charAt(1) // h
pessoa.nome.replace('Ch','th') //thristian
pessoa.nome // Christian

