// Concat, concatena varios arrays em um novo e unico array, com a possibilidade de adicionar novos elementos na concatenação
const filhas = ["Ualeskah", "Cibalena"];
const filhos = ["Uoxiton", "Uesclei"];

const todos = filhas.concat(filhos);
console.log(todos, filhas, filhos);

//Adicionando um elemento extra na concatenação dos arrays
const todosExtra = filhas.concat(filhos, "Fulano");
console.log(todosExtra);

//adicionando arrays e elementos a um array vazio
console.log([].concat([1, 3], [3, 4], 5, [[6, 7]])); //ao usar uma matriz, um array dentro de outro array ele será concatenado como um array dentro do array geral
console.log(["a", "b"].concat([1, 3], [3, 4], 5, [[6, 7]]));
