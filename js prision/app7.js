/*let soma = 0;
let numero;
 do {
  numero = parseInt(prompt('insira um numero'))
  soma += numero;
  console.log(soma)
} while (soma < 100)*/


/*for (let i = 1; i <= 20; i++){
  if (i % 2 === 1){
    continue;
  }
  console.log(i)
}*/

/*for (let index = 1.99; index < 100; index++) {
  let contItens = index++
  console.log(contItens);
}/*

/* resoluçao do professor*/
/*console.log('LOJA QUASE DOIS- TABELA DE PREÇOS')
for (let i = 1; i <= 50; i++ ) {
  console.log(`${i} - R$ ${i*1.99}`)
}*/

let temp;
let somaTemp = 0;
let numTemp = 0

while(true) {
  temp = parseInt(prompt('digite a temperatura'))
  if (temp === 0){
    break;
  }
  somaTemp += temp;
  numTemp += 1;
}

console.log(somaTemp/numTemp);