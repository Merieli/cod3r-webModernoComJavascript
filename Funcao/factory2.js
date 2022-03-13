function criarProduto(nome, preco){
    return {
        nome, //não preciso colocar "nome: nome" porque o atributo "nome" tem o mesmo nome do parâmetro passado na função
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))