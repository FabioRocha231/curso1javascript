/*const numeros = [1,4,9,16]

const novosNumeros = numeros.map((numero) => numero * 2);

console.log(novosNumeros)*/

/*const numeros = [10,20,30,40,50];

const novosNumeros = numeros.map((numero) => numero + 10);

console.log(numeros, novosNumeros)*/

/*const impares = numeros.filter((numero) => numero % 2 === 1);*/

/*const numeros = [10,20,30,40,50];

const maiores = numeros.filter((numero) => numero > 25);

console.log(maiores)*/


/*const numeros = [10, 15,25 ,55 ,40];*/

/*const primeiro = numeros.find((numero) => numero > 25);

console.log(primeiro)*/

/*const numeros = [-7, -10, -3, 0, 4 ,5, 100];

let primeiro = numeros.find((numero) => numero > 0);
let indice = numeros.findIndex((id) => id > 0);

console.log(primeiro, indice)*/

/*const nomes = ['manuel', 'edval', 'bruno', 'jose', 'caio', 'pedro'];

let indiceAleatorio = Math.floor(Math.random() * 6);

console.log(nomes[indiceAleatorio])*/


const frutas = ['melancia', 'jaca', 'morango','uva', 'banana'];

/*for (let fruta of frutas){
  console.log(fruta)
}*/

frutas.forEach((fruta, indice) => {
  console.log(`fruta ${indice}: ${fruta}`)
})



