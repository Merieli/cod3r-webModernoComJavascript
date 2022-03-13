//Classe:
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)//this acessa o nome do objeto que foi instanciado
    }
}

const p1 = new Pessoa('João')
p1.falar()

//Factory:
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)//nesse contexto não é preciso usar o this
    }
}

const p2 = criarPessoa('João')
p2.falar()