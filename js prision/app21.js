let produtos = "3210232-B\n322032321-B\n321212121-C\n9885-D"
const regex = /[0-9]+[-][B]/g;
//const resultado = produtos.match(regex)
const resultado = regex.exec(produtos)
console.log(resultado)