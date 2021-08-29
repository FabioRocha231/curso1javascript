class Carro {

    nome;
    cor;
    velocidadeMax;
    VelocidadeAtual;

        
    constructor(nome, cor, velocidadeMax, velocidadeAtual){
        this.nome = nome;
        this.cor = cor;
        this.velocidadeMax = velocidadeMax;
        this.VelocidadeAtual = velocidadeAtual;
    }    
       
    
    
    acelerar(velocidadeAtual){
        this.VelocidadeAtual += velocidadeAtual;
    }
}

const ferrari = new Carro('ferrari','vermelho', 320, 260);
const mclaren = new Carro('McLaren','preto', 340, 280);

console.log(ferrari.nome);
console.log(ferrari.velocidadeMax);

console.log(mclaren.nome);
console.log(mclaren.velocidadeMax);
