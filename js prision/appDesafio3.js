function criptografia(senha) {
  senhaAux = "";
  for (let i = 0; i < senha.length; i++) {
    senhaAux += "*";
  }
  return senhaAux;
}

const usuario = {
  nome: "jose",
  email: "jose@email.com",
  senha: criptografia("adoleta"),
};

const { senha } = usuario;

console.log(usuario);
