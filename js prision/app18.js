function exibeNome(nome, callback) {
  const promise = (resolve, reject) => {
    setTimeout(() => {
      if(nome === 'Manuel'){
     resolve(nome);
      }else{
        reject(new Error('Nome Invalido'));
      }
    }, 1500);
  };
  return new Promise(promise);
}

function exibeSobrenome() {
  console.log("silva");
}

async function funcaoAsync(){
 const meuNome= await exibeNome('Manuel');
 console.log(meuNome)
 await exibeSobrenome();
 await console.log('tudo bem?');
 await console.log('quantos anos voce tem?');
}

console.log('ola, ');
funcaoAsync();



