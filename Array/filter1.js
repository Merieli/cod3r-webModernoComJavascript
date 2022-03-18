// obter um subarray com os elementos de acordo com determinado filtro
const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: false },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

// filtrando os elementos apenas de precos maiores que 2000
// no filter sempre deve ser feita uma validação pra verificar se é true ou false
console.log(
    produtos.filter(function (p) {
        return p.preco > 2000;
    })
);

// Criando funçoes de validação (true/false) para passar como parametro para o filter
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => !produto.fragil;
console.log(produtos.filter(caro).filter(fragil));
