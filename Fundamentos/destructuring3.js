function rand({ min = 0, max = 1000}){ //passado um objeto para função rand, onde deste será tirado dois atributos min e max dentro de um operador destructuring entregando eles prontos sem precisar usar anotação ponto para acessá-los de dentro do objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40} //utilização de um objeto normal sem utilização do operador destructuring
console.log(rand(obj))
console.log(rand({min: 955})) //dentro do operador destructurig é possível usar o parâmetro padrão, que nesse caso foi definido somente o valor de min e está coletando da definição na função o valor de max
console.log(rand({}))// é possível também passar um objeto vazio e nesse caso vale os parametros padrões
console.log(rand()) // nesse caso sem passar um objeto ele gera erro porque ele tenta desestruturar algo que está undefined ou nulo