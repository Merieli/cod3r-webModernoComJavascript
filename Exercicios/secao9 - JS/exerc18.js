// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário. Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
// Dica: A média simples é o resultado da soma de todos os números dividido pela quantidade de números.

const calcularMedia = (array) => {
    const total = array.reduce((total, elemento) => total + elemento);
    const qtd = array.length;
    return total / qtd;
};

console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(calcularMedia([0, 10]));
