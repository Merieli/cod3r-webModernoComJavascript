function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto ={
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // cria um atributo o o associa com a função que tem mesmo nome
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

//Call e Apply
const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro)) //para a funcão getPreco o call pegou o contexto de execução do objeto carro, no call é passado diretamente os parâmetros que serão passados para função (passando primeiro o contexto e depois todos os parâmetros que se deseja para a função)
console.log(getPreco.apply(carro)) //para a funcão getPreco o apply pegou o contexto de execução do objeto carro, em apply os parâmetros são passados diretamente dentro de um array para função (passando primeiro o contexto e depois em um array todos os parâmetros que se deseja para a função)

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))