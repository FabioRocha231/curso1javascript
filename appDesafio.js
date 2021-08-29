/*class Contador {
    #cont;
    constructor(){
        this.#cont = 0;
    }

    #ehPositivo(){
        if(this.#cont > 0){
            return true;
        }else{
            return false;
        }
    }

    incrementar(){
        this.#cont +=1;
    }

    decrementar(){
        if(this.#ehPositivo){
            this.#cont -=1
        }else{
            console.log('o contador nao pode ser menor que zero');
        }
    }
}

const contador = new Contador();

contador.incrementar();
contador.decrementar();
contador.ehPositivo();*/

//esse e o cadstro para usuario comun

class CadastroEscolar {

    #nome;
    #sobrenome;
    #idade;
    #cpf;


    constructor(nome, sobrenome, idade,cpf){
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#idade = idade;
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf
    }

    get nome(){
        return this.#nome;
    }
    get sobrenome(){
        return  this.#sobrenome;
    }

    // essas funcionalidades adicionam um novo cpf/sobrenome/nome ou substitui um existente.
    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }
    
    set sobrenome(novoSobrenome){
        this.#sobrenome = novoSobrenome;
    }

    set nome(novoNome){
        this.#nome  = novoNome;
    }

    // method que retorna uma saudaçao ao user chamado

    saudacao(){
        return `seja bem vindo ${this.nome} ${this.sobrenome}`
    }

    

    
}

//esse e o cadastro para professores

class Professor extends CadastroEscolar {
    #materia;
    #horas;
    constructor(nome, sobrenome, idade,cpf,materia, horas){
        super(nome, sobrenome, idade, cpf)
        this.#materia = materia;
        this.#horas = horas;
    }

    get materia(){
        return this.#materia;
    }

    get horas(){
        return this.#materia;
    }

    set materia(novaMateria){
        this.#materia = novaMateria;
    }

    set horas(novasHoras){
        this.#horas = novasHoras;
    }

    saudacao(){
        return `Seja bem vindo Professor: ${this.nome} ${this.sobrenome}, materia essa semana: ${this.#materia}, horas:${this.#horas}`
    }
}

// esse e o cadastro para professores

class Aluno extends CadastroEscolar{
    #serie;
    #turma;
    constructor(nome, sobrenome, idade,cpf,serie, turma){
        super(nome, sobrenome, idade, cpf)
        this.#serie = serie;
        this.#turma = turma;
    }
    
    get serie(){
        return this.#serie;
    }

    get turma(){
        return this.#turma
    }

    set serie(novaSerie){
        this.#serie = novaSerie;
    }

    set turma(novaTurma){
        this.#turma = novaTurma;
    }

    saudacao(){
        return `Seja bem vindo ${this.nome} ${this.sobrenome}, sua serie este ano: ${this.#serie} turma:${this.#turma}`
    }
}

// esqueminha para diminuir milhoes de consts na tela ¬¬  
const bancoDados = {
    user1:new CadastroEscolar('Fabio Haroldo', 'Da Rocha', 22, 11111111122),
    user2:new CadastroEscolar('Mario', 'Cunha', 42, 15354285633),
    user3:new CadastroEscolar('aloisio', 'malakoy', 30, 53267333662),
    user4:new CadastroEscolar('manoel', 'coelho', 42, 55511122277),
    user5:new CadastroEscolar('buzz', 'aldrin', 90, 1150066633441),
    user6:new CadastroEscolar('joel', 'ciclone',15, 111455989977),
    user7:new CadastroEscolar('jay', 'garrick', 21, 111144454142),
    user8:new CadastroEscolar('suely', 'daSilva', 22, 131353432113),
    user9:new Professor('jader', 'da silva',33, 11334353411,'historia', 25),
    user10:new Professor('Francisco', 'tenebrio',45, 11334665411,'Filosofia', 25),
    user11:new Professor('Manuel', 'Oroboros',33, 16424353411,'Portugues', 25),
    user12:new Professor('Dom', 'Cesario crispin',33, 11684953411,'Matematica', 25),
    user13:new Aluno('Wilson', 'Mariguela',14, 11684953411,'5*', 901),
    user14:new Aluno('emelly', 'Maria', 16, 11684953411,'6*', 904),
    user15:new Aluno('everson', 'danillo', 12, 11684953411,'3*', 302),
    user16:new Aluno('marcos', 'rodrigues',18, 11684953411,'1 ano', 909),
    user17:new Aluno('zuleika', 'maristela',18, 11684953411,'2 ano', 909),
    user18:new Aluno('christofer', 'Cesario crispin', 17, 11684953411,'1 ano', 908),
    user19:new Aluno('jusara', 'sertaneja maria',7, 11684953411,'prezinho1', 101),
}
// chamada do esqueminha acima
const { user1 , user2 , user3 , user4 , user5 , user6 , user7 , user8 , user9 , user10 , user11 , user12, user13 ,  user14, user15 , user16 , user17 , user18 , user19 } = bancoDados;
console.log(user15.saudacao());
console.log(user1.cpf);


