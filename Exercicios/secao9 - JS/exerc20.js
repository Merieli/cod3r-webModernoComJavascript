// Criar uma função que receba um array de números e retorne o menor número desse array.
const isSmaller = (elemento, indice, array) => {
    const menor = 0;
    return elemento < menor ? menor = elemento
}
const menorNumero = (array) => {
    return array.filter(isSmaller).fitler(isSmaller);
};

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));
