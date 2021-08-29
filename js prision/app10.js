/*let nome = 'Manuel';
function sauda(){
  let saudaçao = `ola senhor ${nome}`;
  return saudaçao;
}

console.log(sauda())*/

/*function somaTresNumeros(num1 = 2, num2 = 5, num3 = 9) {
  return num1 + num2 + num3;
}
console.log(somaTresNumeros());
console.log(somaTresNumeros(10));
console.log(somaTresNumeros(10,8));
console.log(somaTresNumeros(10,5,6));*/


/*let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;


function CadastroCliente (nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente,numAnosCliente = 2, ehBomPagadorCliente = false) {
  nome = nomeCliente;
  sobrenome = sobrenomeCliente;
  idade = idadeCliente;
  valorEmprestimo = valorEmprestimoCliente;
  numAnos = numAnosCliente;
  ehBomPagador = ehBomPagadorCliente;
  taxaDeJuros = defineTaxa(idadeCliente);  
  
  if (idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09;
  }else if (idade >= 26 && idade <=35){
    taxaDeJuros = 0.08;
  }else if (idade >= 36 && idade <= 50){
    taxaDeJuros = 0.7;
  } else {
    taxaDeJuros = 0.6;
  }
  

}

function defineTaxa (idadeCliente) {
  if (idade >= 18 && idade <= 25){
    return 0.09;
  }else if (idade >= 26 && idade <=35){
     return 0.08;
  }else if (idade >= 36 && idade <= 50){
    return 0.7;
  } else {
    return 0.6;
  }
  
}

CadastroCliente('manuel', 'silva',24,1500000);
console.log(nome);
console.log(sobrenome);
console.log(numAnos);
console.log(ehBomPagador)

CadastroCliente('edval', 'slveira', 56,150000, 9)
console.log(nome);
console.log(sobrenome);
console.log(numAnos);
console.log(ehBomPagador)*/

/*function exibeNumeros(...numeros){
  console.log(numeros);
}

exibeNumeros(1);
exibeNumeros(1,2,3)*/