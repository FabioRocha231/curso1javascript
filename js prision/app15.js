const carro1 = {
  nome: "Fiesta",
  marca: "Ford",
  cor: "Preto",
  ano: 2012,
  consumo: 11,
  capacidadeTanque: 45,
  cosnumoKm: function (consumo, capacidadeTanque) {
    return carro1.consumo * carro1.capacidadeTanque;
  },
};

for (const [chave, valor] of Object.entries(carro1)) {
  console.log(`${chave}: ${valor}`);
}
