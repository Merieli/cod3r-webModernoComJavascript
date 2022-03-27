const sequence = {
    //objeto visivel apenas internamente
    _id: 1,
    get id() {
        return this._id++;
    },
};

const produtos = {};

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id;
    produtos[produto.id] = produto;
    return produto;
}

function getProduto(id) {
    return produtos[id] || {};
}

function getProdutos() {
    return Object.values(produtos); //Retorna todos os valores que estiverem dentro do objeto produtos
}

function excluirProduto(id) {
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }; //funcoes visiveis para fora do arquivo
