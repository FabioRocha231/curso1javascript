/*const carro = {
  nome: "Fiesta",
  marca: "Ford",
  cor: "Amarelo",
  emplacado: true,
  consumo: 11,
  capacidadeTanque: 45,
  motor: {
    cavalos: 126,
    cilindradas: 1.6,
  },
};

const { nome, marca } = carro;
const {
  motor: { cavalos },
  motor: { cilindradas },
} = carro;

console.log(nome, marca, cavalos, cilindradas);*/

const carros = [
  { nome: "fiesta", marca: "ford", cor: "amarelo" },
  { nome: "uno", marca: "fiat", cor: "preto" },
  { nome: "Gol", marca: "VW", cor: "azul" },
];

const nomes = carros.map(({ nome }) => nome);
console.log(nomes);
