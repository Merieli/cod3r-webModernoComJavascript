//Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
const segundoMaior = (listaNumeros) => {
    const array = listaNumeros.sort((a, b) => a - b);
    const indice = array.length - 2;
    return array[indice];
};
console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));
