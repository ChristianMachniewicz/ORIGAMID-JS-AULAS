//crie um array com os anos que o Brasil ganhou a coopa 
// 1959, 1962 ,1970 , 1994 , 2002 
vitoriasBrasil = ['1959','1962' ,'1970' ,' 1994' , '2002' ]

//interaja com o array ultilizando um loop para mostrar no console a seguinte mensagem ,"O Brasil foi compeao no ano de ..."


for(i = 0 ; i < vitoriasBrasil.length;i++){
    console.log(`O Brasil foi compeao no ano de ${vitoriasBrasil[i]}`)
}

// interaja com o loop a baixo e pare quando chegar em pera 

var frutas =['banana' , 'maca' , 'pera' , 'uva' , 'melancia']

for(n = 0; n <frutas.length;n++ ){
    if(frutas[n] === 'pera'){
        console.log(`pera esta no index ${n}`)
        break
    }
}