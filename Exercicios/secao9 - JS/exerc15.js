// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.
const numPar = (elemento, indice) => elemento % 2 == 0 && indice % 2 == 0;
const soPares = (array) => array.filter(numPar);

console.log(soPares([10, 70, 22, 43]));
console.log(soPares([1, 2, 3, 4]));
