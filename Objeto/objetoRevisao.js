// O objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object //o operador 'new' é uma forma de criar um novo objeto
// Object é uma função, e ao usar essa função com new se tem uma função construtora  que instancia um objeto

produto.nome = 'Cadeira' //forma dinâmica
produto['marca do produto'] = 'Generica' //definição de identificador como atributo do produto
produto.preco = 220

console.log(produto)
delete produto.preco //excluindo atributos de um objeto
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: { //par chave-valor em que o atributo tem outros atributos e outros objetos como é caso de "endereco"
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }], //array com conjuntos de objetos criando entre []
    calcularValorSeguro: function(){//função dentro do objeto carro
        //...
    }
}

carro.proprietario.endereco.numero = 1000 //acessando atributos por anotação ponto
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' //legal fazer dessa forma quando se quer realizar um introspecção do objeto 
console.log(carro)

delete carro.condutores //dessa forma tudo que estiver abaixo do atributo condutores será excluido
delete carro.proprietario.endereco
delete carro.calcularValorSeguro //deletando também uma função
console.log(carro)
console.log(carro.condutores)//acessar atributos que não existem vai gerar undefined
console.log(carro.condutores.length)//tentar acessar alguma coisa de um atributo que está undefined vai gerar um erro no código
