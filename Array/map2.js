// Desafio Minha resolucao:
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
];

const precos = carrinho.map(function (e) {
    let objeto = JSON.parse(e);
    return objeto.preco;
});

console.log(precos);
