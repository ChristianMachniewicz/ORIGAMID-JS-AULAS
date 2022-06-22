function nomeCompleto(nome, sobrenome){
  
    return `Meu nome completo e ${nome} ${sobrenome}`
    
}
console.log(nomeCompleto('christian' ,'machniewicz'))

// --------------------------------------------------------- \\

function epar(numero){

   var resto = numero %  2
    if( resto != 1){
        console.log(`O numero ${numero} e par`)
        
    }else{
        console.log(`o numero ${numero} e impar`)
    }
    
}
console.log(epar(2))

// ------------------------------------------------------------ \\ 

function tipoDedado(dado){
    return `o tipo de dado e ${typeof dado}`
}
console.log(tipoDedado(4))

// ---------------------------------------------------------------- \\ 
addEventListener('scroll', function(){
    return console.log(`meu nome e senhor todo poderoso`)
})