var videoGames = ["Xbox", "Playstation", "Nintendo Switch"];

console.log(videoGames[0]);

//videoGames.pop(); // remove o ultimo item e retorna ele
videoGames.push("PSP"); // adiciona ao final do array
videoGames.length; // 3

// For loop

for (let numero = 0; numero <= 2; numero++) {
  console.log(numero);
}
// 1 a variavel
// 2 a condicao
// 3 a o resultado if condicao = true

// --------------------------------------------------------- \\

//while loop

var i = 0;
while (i <= 2) {
  console.log(i);
  i++;
}

// ------------------------------------- \\

for (var item = 0; item < videoGames.length; item++) {
  if (videoGames[item] == "Playstation") {
    console.log(`PS esta na posicao ${item}`);
    break;
  }
}

// ------------------------------------------------------------- \\

//forEach

videoGames.forEach(function (consoles) {
  console.log(consoles);
});

var numero = 0;
var maximo = 40;
for (; numero <= maximo; ) {
  console.log(numero);
  numero++;
}
