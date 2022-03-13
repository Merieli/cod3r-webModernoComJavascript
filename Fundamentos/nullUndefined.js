let valor // não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString()) // Gera Erro porque não é possivel usar a função toString() em uma variável de valor null 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto);

produto.preco = undefined //evite atribuir undefined de forma explicita é prefirivel atribuir 0
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log (!!produto.preco)// conversao para boolean
console.log(produto)
