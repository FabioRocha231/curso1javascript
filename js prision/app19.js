/*function exibeNome(nome, callback) {
  setTimeout(() => {
    console.log(nome);
    callback();
  }, 1500);
}

console.log("ola, ");
exibeNome("Manuel", function () {
  console.log("silva");
});*/

const filmes = [
  { nome: "Transformers", genero: "Sci-fi, Ação" },
  { nome: "Transformers 2", genero: "Sci-fi, Ação" },
  { nome: "Tropa de Elite", genero: "Ação" },
  { nome: "Tropa de Elite 2", genero: "Sci-fi, Ação" },
  { nome: "Hermanoteu na Terra de Godah", genero: "comedia" },
];
const criaElementosUI = function () {
  let aux = "";
  filmes.forEach((filme) => {
    aux += `<li> nome:${filme.nome}, Genero: ${filme.genero}</li>`;
  });
  listaFilmes.innerHTML = aux;
};

function exibeFilmes() {
  setTimeout(criaElementosUI, 1000);
}
function adicionaFilme(filme) {
  const promise = (resolve, reject) => {
    setTimeout(()=> {
      if(filme.nome === '' || filme.genero === ''){
        reject(new Error('nome e/ou genero invalido!!!'))
      }else{
        filmes.push(filme)
        resolve(filme)
      }
      
    }, 100);
  } 
  return new Promise(promise)
}

async function  asyncFunc(){
  try{
    const oContratempo = await adicionaFilme({ nome: "o cotratempo", genero: "suspense" });
  console.log(oContratempo);
  await adicionaFilme({nome: 'velozes e furiosos 1', genero: 'açao'});
  await adicionaFilme({nome: 'velozes e furiosos 2', genero: 'açao'});
  await adicionaFilme({nome: 'velozes e furiosos 3', genero: 'açao'});
  exibeFilmes();
  } catch(erro){
    console.error(erro)
  }
  
}


asyncFunc();
 