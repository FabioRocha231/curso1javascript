/*function calculoArea(lado) {
  let area = lado * lado;
  return area;

}*/

/*function calculoMedia(num1, num2, num3) {
  let media = ((num1 + num2 + num3) / 3)
  return media;
}

console.log(calculoMedia(7,8,9));
console.log(calculoMedia(5,5,5));
console.log(calculoMedia(4,5,6));
console.log(calculoMedia(10, 20, 30));*/
/*let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;




function CadastroCliente (nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente,numAnosCliente, ehBomPagadorCliente = false, avalistaCliente) {
  nome = nomeCliente;
  sobrenome = sobrenomeCliente;
  idade = idadeCliente;
  valorEmprestimo = valorEmprestimoCliente;
  numAnos = numAnosCliente;
  ehBomPagador = ehBomPagadorCliente;
  taxaDeJuros = defineTaxa(idadeCliente);  
  avalistas = avalistaCliente;
  
  if (idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09;
  }else if (idade >= 26 && idade <=35){
    taxaDeJuros = 0.08;
  }else if (idade >= 36 && idade <= 50){
    taxaDeJuros = 0.7;
  } else {
    taxaDeJuros = 0.6;
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

}


CadastroCliente('edval', 'silveira', 56, 150000, 9, true, ['manuel', 'raphael','bruno'])

function addAvalista(avalista){
  avalistas.push(avalista);
}

function delAvalista(){
  avalistas.pop();
}

function editaAvalista(nomeAvalista, indice){
  avalistas[indice] = nomeAvalista;
}

function ordenaAvalista(){
  return avalistas.sort();
}

function exibeAvalista(){
  avalistas.forEach((avalista, indice) => {
    console.log(`o ${indice+1}* avalista e : ${avalista}`)
  });
}

addAvalista('andrew');
addAvalista('jose');
addAvalista('marcos');
console.log(avalistas)
delAvalista();
delAvalista();
editaAvalista('manuel silva', 0)

console.log(avalistas)
console.log(ordenaAvalista())
console.log(exibeAvalista())*/

function CadastroCliente(
  nomeCliente,
  sobrenomeCliente,
  idadeCliente,
  valorEmprestimoCliente,
  numAnosCliente = 2,
  ehBomPagadorCliente = false,
  avalistaCliente
) {
  cliente = {
    nome: nomeCliente,
    sobrenome: sobrenomeCliente,
    idade: idadeCliente,
    emprestimo: {
      valorEmprestimo: valorEmprestimoCliente,
      numAnos: numAnosCliente,
      ehBomPagador: ehBomPagadorCliente,
      taxaDeJuros: defineTaxa(idadeCliente),
      avalistas: avalistaCliente,
    },
    adicionaAvalista: function (avalista) {
      this.emprestimo.avalistas.push(avalista);
    },
    removeAvalista: function () {
      this.emprestimo.avalista.pop();
    },
    editaAvalista: function (nomeAvalista, indice) {
      this.emprestimo.avalistas[indice] = nomeAvalista;
    },
    ordenaAvalista: function () {
      this.emprestimo.avalistas.sort();
    },
    exibeAvalista: function () {
      this.emprestimo.avalistas.forEach((avalista, indice) => {
        console.log(`o ${indice + 1}* avalista e ${avalista}`);
      });
    },
  };
  return cliente;
}

function defineTaxa(idadeCliente) {
  if (idadeCliente >= 18 && idadeCliente <= 25) {
    return 0.09;
  } else if (idadeCliente >= 26 && idadeCliente <= 35) {
    return 0.08;
  } else if (idadeCliente >= 36 && idadeCliente <= 50) {
    return 0.7;
  } else {
    return 0.6;
  }
}

function credenciaisInvalidas(mensagem) {
  this.nome = "Credenciais invalidas";
  this.mensagem = mensagem;
}

function adicionaInfLogin(cliente, email, senha) {
  if (
    email.indexOf("@") !== -1 &&
    email.indexOf(".com") !== -1 &&
    senha.length > 5
  ) {
    cliente.login = {
      email: email,
      senha: senha,
    };
    return cliente;
  } else {
    throw new credenciaisInvalidas("Os dados são inválidos");
  }
}

try {
  const cliente1 = CadastroCliente("edval", "silveira", 56, 150000, 9, true, [
    "manuel",
    "raphael",
    "bruno",
  ]);
  console.log(adicionaInfLogin(cliente1, "emailluiz.com", "ed123456"));
} catch (erro) {
  console.log(erro);
  console.log("nome", erro.nome);
  console.log("mensagem", erro.mensagem);
} finally {
  console.log("deseja operar uma nova tentativa?");
}
