// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas. Crie uma função que receba um array de produtos e retorne o total das despesas.
produtos = [
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
];

produtos2 = [
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
];

const despesasTotais = (array) => {
    return array
        .map((produto) => produto.preco)
        .reduce((total, produto) => {
            return total + produto;
        });
};

console.log(despesasTotais(produtos));
console.log(despesasTotais(produtos2));
