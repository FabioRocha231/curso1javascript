/*let soma = 0;

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  soma += numeros[i];
}

console.log(soma);*/

/*alert("hello world!!);*/

/*/let x = y + 10;

console.log(x)*/

/*if (true) {
  let y = 1;
  let x = y + 10;
}

console.log(x);*/

/*let num = 1;
num.toUpperCase();*/

/*try {
  let nome = "manuel";
  console.log(nome.toUpperCase());
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Fim da Tratativa de Erros");
}*/

function soma(num1, num2) {
  if (typeof num1 !== "number") {
    throw TypeError("O primeiro argumento deve ser um numero.");
  }
  if (typeof num2 !== "number") {
    throw TypeError("O segundo argumento deve ser um numero.");
  }
  return num1 + num2;
}

try {
  console.log(soma(10, 20));
} catch (erro) {
  console.log(erro);
}

try {
  console.log(soma("manuel", 20));
} catch (erro) {
  console.log(erro);
}

try {
  console.log(soma(10, "manuel"));
} catch (erro) {
  console.log(erro);
}
