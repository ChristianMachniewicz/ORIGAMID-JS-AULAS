function numeroDeBigodes(bigode) {
  return bigode * bigode;
}

console.log(numeroDeBigodes(5), numeroDeBigodes(10));

function pi() {
  return 3.14;
}

var total = 10 * pi() 

console.log(total)


function imc(peso, altura){
   const imc = peso / (altura * altura)
   return imc
}
console.log(imc(90 , 1.85))

// ------------------------------------------- //
var profissao = 'web developer'

function dados(){
    const enderco = 'Parana'
    var idade = 21 
    function outrosdados(){
        return ` ${idade}, ${endereco}, ${profissao}`
    }
    return outrosdados()
}

dados()

